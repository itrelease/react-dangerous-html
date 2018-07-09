'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}

function replaceScriptElementsRecursive(node, acc) {
  if (node.tagName === 'SCRIPT' && (!node.id || node.id.indexOf('script-') !== 0)) {
    var script = document.createElement('script');

    script.id = 'script-' + Math.random().
    toString(16).
    slice(2);
    script.innerHTML = node.innerHTML;

    var attrs = node.attributes;

    for (var i = 0; i < attrs.length; i += 1) {var _attrs$i =
      attrs[i],name = _attrs$i.name,value = _attrs$i.value;

      script.setAttribute(name, value);
    }

    acc.push(script);
    node.parentElement.replaceChild(script, node);
  } else {
    var _i = 0;
    var children = node.childNodes;

    while (_i < children.length) {
      replaceScriptElementsRecursive(children[_i], acc);
      _i += 1;
    }
  }
}

function removeScriptElements(scriptElements) {
  var i = 0;

  while (i < scriptElements.length) {
    var parentEl = scriptElements[i].parentElement;

    if (parentEl) {
      parentEl.removeChild(scriptElements[i]);
    }

    i += 1;
  }

  return [];
}var

DangerousHTML = function (_React$Component) {_inherits(DangerousHTML, _React$Component);function DangerousHTML() {var _ref;var _temp, _this, _ret;_classCallCheck(this, DangerousHTML);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DangerousHTML.__proto__ || Object.getPrototypeOf(DangerousHTML)).call.apply(_ref, [this].concat(args))), _this), _this.











    state = {
      canRenderHTML: true }, _this.













































    element = null, _this.
    scriptElements = [], _temp), _possibleConstructorReturn(_this, _ret);}_createClass(DangerousHTML, [{ key: 'componentWillMount', value: function componentWillMount() {// Do not render html with scripts on server side
      if (this.props.html.indexOf('script') > -1) {this.setState({ canRenderHTML: false });}} }, { key: 'componentDidMount', value: function componentDidMount() {var _this2 = this; /* eslint-disable react/no-did-mount-set-state */this.setState({ canRenderHTML: true }, function () {_this2.insertScriptsIfNeeded();_this2.prepareAnchors();}); /* eslint-enable react/no-did-mount-set-state */} }, { key: 'componentWillReceiveProps', value: function componentWillReceiveProps(nextProps) {if (nextProps.html !== this.props.html) {this.scriptElements = removeScriptElements(this.scriptElements);}} }, { key: 'shouldComponentUpdate', value: function shouldComponentUpdate(nextProps, nextState) {return nextProps.html !== this.props.html || nextState.canRenderHTML !== this.state.canRenderHTML;} }, { key: 'componentDidUpdate', value: function componentDidUpdate(prevProps, prevState) {if (prevProps.html !== this.props.html || !prevState.canRenderHTML && this.state.canRenderHTML) {this.insertScriptsIfNeeded();this.prepareAnchors();}} }, { key: 'componentWillUnmount', value: function componentWillUnmount() {this.scriptElements = removeScriptElements(this.scriptElements);} }, { key: 'insertScriptsIfNeeded', value: function insertScriptsIfNeeded()
    {var
      html = this.props.html;

      if (html.indexOf('script') > -1 && this.element) {
        this.element.innerHTML = html;

        replaceScriptElementsRecursive(this.element, this.scriptElements);
      }
    } }, { key: 'prepareAnchors', value: function prepareAnchors()

    {
      if (!this.element) {
        return;
      }

      var anchors = [].slice.call(this.element.querySelectorAll('a'), 0);

      anchors.forEach(function (a) {
        a.setAttribute('target', '_blank');
      });
    } }, { key: 'render', value: function render()

    {var _this3 = this;var _props =
      this.props,html = _props.html,className = _props.className,TagName = _props.tagName;var
      canRenderHTML = this.state.canRenderHTML;

      if (!canRenderHTML) {
        return null;
      }

      return (
        _react2.default.createElement(TagName, {
          ref: function ref(element) {
            _this3.element = element;
          },
          className: className,
          dangerouslySetInnerHTML: { __html: html } }));


    } }]);return DangerousHTML;}(_react2.default.Component);DangerousHTML.propTypes = { html: _propTypes2.default.string.isRequired, tagName: _propTypes2.default.string, className: _propTypes2.default.string };DangerousHTML.defaultProps = { tagName: 'div', className: '' };exports.default =


DangerousHTML;
//# sourceMappingURL=DangerousHTML.js.map
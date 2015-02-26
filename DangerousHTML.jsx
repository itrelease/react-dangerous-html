'use strict';

var React = require('react');
var guid = require('simple-guid');

var scriptNodes = [];

function replaceScriptsRecurse(node) {
  if (node.tagName && node.tagName === 'SCRIPT') {
    var script  = document.createElement('script');

    script.id = guid();
    script.text = node.innerHTML;

    scriptNodes.push(script);

    if (node.src) {
      script.src = node.src;
    }

    node.parentNode.replaceChild(script, node);
  } else {
    var i = 0;
    var children = node.childNodes;

    while (i < children.length) {
      replaceScriptsRecurse(children[i]);
      i++;
    }
  }

  return node;
}

function removeLastInjectedScripts() {
  var i = 0;

  while (i < scriptNodes.length) {
    scriptNodes[i].parentNode.removeChild(scriptNodes[i]);
    i += 1;
  }

  scriptNodes = [];
}

var DangerousHTML = React.createClass({
  propTypes: {
    html: React.PropTypes.string.isRequired
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.html !== this.props.html) {
      removeLastInjectedScripts(this.getDOMNode());
    }
  },

  shouldComponentUpdate(nextProps) {
    return nextProps.html !== this.props.html;
  },

  componentDidMount() {
    replaceScriptsRecurse(this.getDOMNode());
  },

  componentDidUpdate(prevProps) {
    if (prevProps.html !== this.props.html) {
      replaceScriptsRecurse(this.getDOMNode());
    }
  },

  componentWillUnmount() {
    removeLastInjectedScripts();
  },

  render() {
    var className = this.props.className || 'DangerousHTML';

    return (
      <div className={className}
           dangerouslySetInnerHTML={{ __html: this.props.html }} />
    );
  }
});

module.exports = DangerousHTML;
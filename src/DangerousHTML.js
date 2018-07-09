import React from 'react';
import PropTypes from 'prop-types';

function replaceScriptElementsRecursive(node, acc) {
  if (node.tagName === 'SCRIPT' && (!node.id || node.id.indexOf('script-') !== 0)) {
    const script = document.createElement('script');

    script.id = `script-${Math.random()
      .toString(16)
      .slice(2)}`;
    script.innerHTML = node.innerHTML;

    const attrs = node.attributes;

    for (let i = 0; i < attrs.length; i += 1) {
      const { name, value } = attrs[i];

      script.setAttribute(name, value);
    }

    acc.push(script);
    node.parentElement.replaceChild(script, node);
  } else {
    let i = 0;
    const children = node.childNodes;

    while (i < children.length) {
      replaceScriptElementsRecursive(children[i], acc);
      i += 1;
    }
  }
}

function removeScriptElements(scriptElements) {
  let i = 0;

  while (i < scriptElements.length) {
    const parentEl = scriptElements[i].parentElement;

    if (parentEl) {
      parentEl.removeChild(scriptElements[i]);
    }

    i += 1;
  }

  return [];
}

class DangerousHTML extends React.Component {
  static propTypes = {
    html: PropTypes.string.isRequired,
    tagName: PropTypes.string,
    className: PropTypes.string
  };

  static defaultProps = {
    tagName: 'div',
    className: ''
  };

  state = {
    canRenderHTML: true
  };

  componentWillMount() {
    // Do not render html with scripts on server side
    if (this.props.html.indexOf('script') > -1) {
      this.setState({ canRenderHTML: false });
    }
  }

  componentDidMount() {
    /* eslint-disable react/no-did-mount-set-state */
    this.setState({ canRenderHTML: true }, () => {
      this.insertScriptsIfNeeded();
      this.prepareAnchors();
    });
    /* eslint-enable react/no-did-mount-set-state */
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.html !== this.props.html) {
      this.scriptElements = removeScriptElements(this.scriptElements);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.html !== this.props.html ||
      nextState.canRenderHTML !== this.state.canRenderHTML
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.html !== this.props.html ||
      (!prevState.canRenderHTML && this.state.canRenderHTML)
    ) {
      this.insertScriptsIfNeeded();
      this.prepareAnchors();
    }
  }

  componentWillUnmount() {
    this.scriptElements = removeScriptElements(this.scriptElements);
  }

  element = null;
  scriptElements = [];

  insertScriptsIfNeeded() {
    const { html } = this.props;

    if (html.indexOf('script') > -1 && this.element) {
      this.element.innerHTML = html;

      replaceScriptElementsRecursive(this.element, this.scriptElements);
    }
  }

  prepareAnchors() {
    if (!this.element) {
      return;
    }

    const anchors = [].slice.call(this.element.querySelectorAll('a'), 0);

    anchors.forEach(a => {
      a.setAttribute('target', '_blank');
    });
  }

  render() {
    const { html, className, tagName: TagName } = this.props;
    const { canRenderHTML } = this.state;

    if (!canRenderHTML) {
      return null;
    }

    return (
      <TagName
        ref={element => {
          this.element = element;
        }}
        className={className}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
}

export default DangerousHTML;

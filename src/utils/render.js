export const render = (layoutTemplate, layoutStyle, idSelector) => {
  const node = document.getElementById(idSelector);
  const style = document.createElement('style');
  style.innerHTML = layoutStyle;
  const template = document.createElement('template');
  template.innerHTML = layoutTemplate;
  if (!node) return;
  node.appendChild(style);
  node.appendChild(template.content);
  return node;
};

export const renderWebComponent = (layoutTemplate, layoutStyle, node) => {
  const style = document.createElement('style');
  style.innerHTML = layoutStyle;
  const template = document.createElement('template');
  template.innerHTML = layoutTemplate;
  node.attachShadow({ mode: 'open' });
  node.shadowRoot.appendChild(style.cloneNode(true));
  node.shadowRoot.appendChild(template.content.cloneNode(true));
};

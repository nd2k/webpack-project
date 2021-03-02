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

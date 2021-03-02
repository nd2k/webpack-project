import eventBus from '../utils/eventBus';

const template = document.createElement('template');
template.innerHTML = `
<div>
  <h1>Test22222222222</h1>
</div>
`;

export default class Component extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.navbar = document.getElementById('_navbar').shadowRoot;
    console.log(this.navbar);
  }

  connectedCallback() {
    eventBus.addEventListener('navigation-event', (event) => {
      console.log(event);
    });
  }
}

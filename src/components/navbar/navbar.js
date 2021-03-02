import eventBus from '../../utils/eventBus';
import navbarLayout from './navbar.html';
import navbarStyle from './navbar.scss';

const style = document.createElement('style');
style.innerText = navbarStyle;
const template = document.createElement('template');
template.innerHTML = navbarLayout;

export default class Navbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(style.cloneNode(true));
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.links = this.shadowRoot.querySelectorAll('[route]');
  }

  connectedCallback() {
    this.links.forEach((targetLink) => {
      targetLink.addEventListener('click', () => {
        eventBus.dispatchEvent('navigation-event', {
          detail: { test: 'test' },
        });
      });
    });
  }
}

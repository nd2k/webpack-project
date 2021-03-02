import navbarLayout from './navbar.html';
import navbarStyle from './navbar.scss';
import { activeLink } from '../../utils/activeLink';

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
        let optionalCurrentActiveLink = this.shadowRoot.querySelector(
          '.active'
        );
        console.log(optionalCurrentActiveLink);
        activeLink(optionalCurrentActiveLink, targetLink);
      });
    });
  }
}

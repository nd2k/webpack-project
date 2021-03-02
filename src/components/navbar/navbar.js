import navbarLayout from './navbar.html';
import navbarStyle from './navbar.scss';
import { activeLink, activeLinkOnLoad } from '../../utils/activeLink';
import { renderWebComponent } from '../../utils/render';

export default class Navbar extends HTMLElement {
  constructor() {
    super();
    renderWebComponent(navbarLayout, navbarStyle, this);

    this.links = this.shadowRoot.querySelectorAll('[route]');
  }

  connectedCallback() {
    window.onload = () => {
      let optionalCurrentActiveLink = this.shadowRoot.querySelector('.active');
      activeLinkOnLoad(
        window.location.pathname,
        optionalCurrentActiveLink,
        this.links
      );
    };
    this.links.forEach((targetLink) => {
      targetLink.addEventListener('click', () => {
        let optionalCurrentActiveLink = this.shadowRoot.querySelector(
          '.active'
        );
        activeLink(optionalCurrentActiveLink, targetLink);
      });
    });
  }
}

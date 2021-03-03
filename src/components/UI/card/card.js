import cardLayout from './card.html';
import cardStyle from './card.scss';
import { renderWebComponent } from '../../../utils/render';
import eventBus from '../../../utils/eventBus';

export default class Card extends HTMLElement {
  constructor() {
    super();
    renderWebComponent(cardLayout, cardStyle, this);
    this.card = this.shadowRoot.querySelector('.card');
    this.headerEl = this.shadowRoot.querySelector('.header');
    this.footerEl = this.shadowRoot.querySelector('.footer');
  }

  // any attribute specified in the following array will automatically
  // trigger attributeChangedCallback when you modify it.
  static get observedAttributes() {
    return ['size', 'header', 'footer'];
  }

  get size() {
    return this.getAttribute('size');
  }
  get header() {
    return this.getAttribute('header');
  }
  get footer() {
    return this.getAttribute('footer');
  }
  set size(value) {
    this.setAttribute('size', value);
  }
  set size(value) {
    this.setAttribute('header', value);
  }
  set size(value) {
    this.setAttribute('footer', value);
  }

  // sync properties
  attributeChangedCallback(prop, oldValue, newValue) {
    if (prop === 'size') {
      this.card.classList.add(this.size);
    }
    if (prop === 'header') {
      if (this.header === 'false') {
        this.headerEl.remove();
      }
    }
    if (prop === 'footer') {
      if (this.footer === 'false') {
        this.footerEl.remove();
      }
    }
  }
}

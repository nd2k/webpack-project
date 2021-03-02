import buttonStyle from './button.scss';
import buttonlayout from './button.html';
import eventBus from '../../utils/eventBus';
import { renderWebComponent } from '../../utils/render';

class Button extends HTMLElement {
  constructor() {
    super();
    renderWebComponent(buttonlayout, buttonStyle, this);
    // bind this to the function to access properties
    this.handleClick = this.handleClick.bind(this);
    this.button = this.shadowRoot.querySelector('.button');
  }

  // any attribute specified in the following array will automatically
  // trigger attributeChangedCallback when you modify it.
  static get observedAttributes() {
    return ['name', 'color', 'size', 'disabled'];
  }

  get name() {
    return this.getAttribute('name');
  }
  get color() {
    return this.getAttribute('color');
  }
  get size() {
    return this.getAttribute('size');
  }
  get disabled() {
    return this.getAttribute('disabled');
  }

  set name(value) {
    this.setAttribute('name', value);
  }

  set color(value) {
    this.setAttribute('color', value);
  }

  set size(value) {
    this.setAttribute('size', value);
  }
  set disabled(value) {
    this.setAttribute('size', value);
  }

  // sync properties
  attributeChangedCallback(prop, oldValue, newValue) {
    if (prop === 'color') {
      this.button.classList.add(this.color);
    }
    if (prop === 'size') {
      this.button.classList.add(this.size);
    }
    if (this.disabled) {
      this.button.classList.add('disabled');
    }
  }

  connectedCallback() {
    this.button.addEventListener('click', this.handleClick);
  }

  diconnectedCallback() {
    this.button.removeEventListener();
  }

  handleClick() {
    const event = new CustomEvent(`${this.name}-custom-event`, {
      detail: {
        name: this.name,
      },
    });
    console.log(event);
    eventBus.dispatchEvent(`${this.name}-custom-event`, {
      detail: {
        name: this.name,
      },
    });
  }
}

export default Button;

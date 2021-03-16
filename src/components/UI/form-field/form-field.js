import formFieldLayout from './form-field.html';
import formFieldStyle from './form-field.scss';
import { renderWebComponent } from '../../../utils/render';

export default class FormField extends HTMLElement {
  constructor() {
    super();
    renderWebComponent(formFieldLayout, formFieldStyle, this);

    this.formField = this.shadowRoot.querySelector('.form-field');
    this.formControl = this.shadowRoot.querySelector('.form-control');
    this.labelEl = this.shadowRoot.querySelector('label');
    this.labelEl.innerHTML = this.label;
    this.errorMessageEl = this.shadowRoot.querySelector('.error-message');
    this.errorMessageEl.innerHTML = this.error;
    this.inputEl = this.shadowRoot.querySelector('input');
    this.inputEl.setAttribute('type', this.type);
  }

  // any attribute specified in the following array will automatically
  // trigger attributeChangedCallback when you modify it.
  static get observedAttributes() {
    return [
      'name',
      'label',
      'size',
      'type',
      'error',
      'color-label',
      'color-input',
    ];
  }

  get name() {
    return this.getAttribute('name');
  }

  get label() {
    return this.getAttribute('label');
  }

  get size() {
    return this.getAttribute('size');
  }

  get type() {
    return this.getAttribute('type');
  }

  get error() {
    return this.getAttribute('error');
  }

  get colorLabel() {
    return this.getAttribute('color-label');
  }

  get colorInput() {
    return this.getAttribute('color-input');
  }

  set name(value) {
    this.setAttribute('name', value);
  }

  set label(value) {
    this.setAttribute('label', value);
  }

  set size(value) {
    this.setAttribute('size', value);
  }

  set type(value) {
    this.setAttribute('type', value);
  }

  set error(value) {
    this.setAttribute('error', value);
  }

  set colorLabel(value) {
    this.setAttribute('color-label', value);
  }

  set colorInput(value) {
    this.setAttribute('color-input', value);
  }

  // sync properties
  attributeChangedCallback(prop, oldValue, newValue) {
    if (prop === 'size') {
      this.formField.classList.add(this.size);
    }
    if (prop === 'color-label') {
      this.formField.classList.add(this.colorLabel + '-label');
    }
    if (prop === 'color-input') {
      this.formField.classList.add(this.colorInput + '-input');
    }
  }

  connectedCallback() {
    this.formControl.addEventListener('focusout', () => {
      if (this.formControl.value.length > 0) {
        this.formControl.classList.add('has-value');
      } else {
        this.formControl.classList.remove('has-value');
      }
    });
    this.labelEl.addEventListener('click', () => {
      this.formControl.classList.add('has-value');
    });
  }

  diconnectedCallback() {
    this.formControl.removeEventListener();
  }
}

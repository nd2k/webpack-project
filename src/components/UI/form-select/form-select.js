import formSelectLayout from './form-select.html';
import formSelectStyle from './form-select.scss';
import { renderWebComponent } from '../../../utils/render';

export default class FormSelect extends HTMLElement {
  constructor() {
    super();
    renderWebComponent(formSelectLayout, formSelectStyle, this);

    // get the nodes
    this.labelEl = this.shadowRoot.querySelector('label');
    this.selectEl = this.shadowRoot.querySelector('select');
    this.optionsEl = this.shadowRoot.querySelectorAll('option');
    // add label and for tag
    this.labelEl.innerHTML = this.label;
    this.labelEl.setAttribute('for', this.name);
    // add select name and id
    this.selectEl.setAttribute('name', this.name);
    this.selectEl.setAttribute('id', this.name);
    // for each option add label + value
    let optArray = this.options.split(',');
    optArray.forEach((option) => {
      let optionEl = this.selectEl.appendChild(
        document.createElement('option')
      );
      optionEl.setAttribute('value', option);
      optionEl.innerHTML = option;
    });
  }

  // any attribute specified in the following array will automatically
  // trigger attributeChangedCallback when you modify it.
  static get observedAttributes() {
    return ['name', 'label', 'options'];
  }

  get name() {
    return this.getAttribute('name');
  }

  get label() {
    return this.getAttribute('label');
  }

  get options() {
    return this.getAttribute('options');
  }

  set name(value) {
    this.setAttribute('name', value);
  }

  set label(value) {
    this.setAttribute('label', value);
  }

  set options(value) {
    this.setAttribute('options', value);
  }
}

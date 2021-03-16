import dataListLayout from './dataList.html';
import dataListStyle from './dataList.scss';
import { renderWebComponent } from '../../../utils/render';

export default class dataList extends HTMLElement {
  constructor() {
    super();
    renderWebComponent(dataListLayout, dataListStyle, this);

    // Get element
    const label = this.shadowRoot.querySelector('label');
    this.input = this.shadowRoot.querySelector('input');
    const dataList = this.shadowRoot.querySelector('datalist');

    // Add for attribute and html to label
    label.setAttribute('for', this.name);
    label.innerHTML = this.label;

    // Add list, name & id to input
    this.input.setAttribute('list', this.listId);
    this.input.setAttribute('name', this.name);
    this.input.setAttribute('id', this.name);

    // Add id attribute to datalist
    dataList.setAttribute('id', this.listId);
    // For each options, create an option element with value
    let optArray = this.options.split(',');
    optArray.forEach((option) => {
      const optionEl = dataList.appendChild(document.createElement('option'));
      optionEl.setAttribute('value', option);
      optionEl.innerHTML = option;
    });
  }

  // Any attribute specified in the following array will automatically
  // trigger attributeChangedCallback when you modify it.
  static get observedAttributes() {
    return ['name', 'listId', 'label', 'options'];
  }

  get name() {
    return this.getAttribute('name');
  }

  get listId() {
    return this.getAttribute('listId');
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

  set listId(value) {
    this.setAttribute('listId', value);
  }

  set label(value) {
    this.setAttribute('label', value);
  }

  set options(value) {
    this.setAttribute('options', value);
  }

  connectedCallback() {
    this.input.addEventListener('input', () => {
      if (this.input.value.length > 0) {
        this.input.classList.add('has-value');
      } else {
        this.input.classList.remove('has-value');
      }
    });
  }
}

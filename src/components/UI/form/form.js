import formLayout from './form.html';
import formStyle from './form.scss';
import { renderWebComponent } from '../../../utils/render';
import eventBus from '../../../utils/eventBus';

export default class FormField extends HTMLElement {
  constructor() {
    super();
    renderWebComponent(formLayout, formStyle, this);

    this.fields = document.querySelectorAll('.field');
  }

  connectedCallback() {
    eventBus.addEventListener('getData-btn-event', () => {
      this.getData();
    });
  }

  getData() {
    let data = {};
    this.fields.forEach((field) => {
      let inputs = field.shadowRoot.querySelectorAll('.form-control');
      inputs.forEach((input) => {
        let name = input.getAttribute('name');
        let value = input.value;
        if (name) {
          data[name] = value;
        }
        input.value = '';
        input.classList.remove('has-value');
      });
    });
    console.log(JSON.stringify(data));
    return JSON.stringify(data);
  }
}

import addExpenseLayout from './addExpense.html';
import addExpenseStyle from './addExpense.scss';
import { renderWebComponent } from '../../utils/render';
import eventBus from '../../utils/eventBus';
import store from '../../store/index';

export default class AddExpense extends HTMLElement {
  constructor() {
    super({ store });
    renderWebComponent(addExpenseLayout, addExpenseStyle, this);
    this.fields = this.querySelectorAll('.field');
    this.modal = document.querySelector('my-modal');
  }

  connectedCallback() {
    eventBus.addEventListener('create-expense-btn-event', () => {
      let addExpenseData = this.getData();
      store.dispatch('addExpense', addExpenseData);
      this.clearInput();
      this.modal.shadowRoot.querySelector('.modal').style.display = 'none';
      eventBus.dispatchEvent('send-data-to-list-event', addExpenseData);
      return JSON.stringify(addExpenseData);
    });
  }

  clearInput() {
    this.fields.forEach((field) => {
      let input = field.shadowRoot.querySelector('.form-control');
      input.value = '';
      input.classList.remove('has-value');
    });
  }

  getData() {
    let addExpenseData = {};
    this.fields.forEach((field) => {
      let name = field.name;
      let value = field.shadowRoot.querySelector('.form-control').value;
      addExpenseData[name] = value;
    });
    return addExpenseData;
  }
}

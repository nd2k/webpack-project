import listExpenseLayout from './listExpense.html';
import listExpenseStyle from './listExpense.scss';
import { renderWebComponent } from '../../utils/render';
import eventBus from '../../utils/eventBus';
import store from '../../store/index';

export default class ListExpense extends HTMLElement {
  constructor() {
    super();
    renderWebComponent(listExpenseLayout, listExpenseStyle, this);
    this.list = this.shadowRoot.querySelector('.expenseList');
  }

  connectedCallback() {
    this.getAllExpenses();
    eventBus.addEventListener('send-data-to-list-event', (event) => {
      this.renderExpensesList(event.detail);
    });
  }

  async getAllExpenses() {
    await store.dispatch('getAllExpenses');
    if (this.list.childNodes.length === 0) {
        this.createTitles();
      }
    let expenses = store.state.expenses;
    expenses.forEach(expense => {
      this.renderExpensesList(expense)
    })
  }

  createTitles() {
    const divElement = this.list.appendChild(document.createElement('div'));
    divElement.classList.add('titles');
    const spanEl1 = document.createElement('span');
    const spanEl2 = document.createElement('span');
    const spanEl3 = document.createElement('span');
    spanEl1.innerText = 'Type';
    spanEl2.innerText = 'Description';
    spanEl3.innerText = 'Montant';
    divElement.appendChild(spanEl1);
    divElement.appendChild(spanEl2);
    divElement.appendChild(spanEl3);
  }
  renderExpensesList(expenseData) {
    const ulElement = this.list.appendChild(document.createElement('ul'));
    const liElement = ulElement.appendChild(document.createElement('li'));
    const divElement = liElement.appendChild(document.createElement('div'));
    divElement.classList.add('expense');
    const spanEl1 = document.createElement('span');
    const spanEl2 = document.createElement('span');
    const spanEl3 = document.createElement('span');
    spanEl1.innerText = expenseData.expenseType;
    spanEl2.innerText = expenseData.expenseDescription;
    spanEl3.innerText = expenseData.expenseAmount + '€';
    divElement.appendChild(spanEl1);
    divElement.appendChild(spanEl2);
    divElement.appendChild(spanEl3);
  }
}

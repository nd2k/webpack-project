import modalLayout from './modal.html';
import modalStyle from './modal.scss';
import { renderWebComponent } from '../../../utils/render';
import eventBus from '../../../utils/eventBus';

export default class Modal extends HTMLElement {
  constructor() {
    super();
    renderWebComponent(modalLayout, modalStyle, this);

    this.modal = this.shadowRoot.querySelector('.modal');
    this.close = this.shadowRoot.querySelector('.close');
  }

  connectedCallback() {
    eventBus.addEventListener('open-modal-btn-event', () => {
      this.modal.style.display = 'block';
    });
    this.close.addEventListener('click', () => {
      this.modal.style.display = 'none';
    });
    window.addEventListener('click', (event) => {
      const modal = document.querySelector('my-modal');
      if (event.target == modal) {
        this.modal.style.display = 'none';
      }
    });
  }
}

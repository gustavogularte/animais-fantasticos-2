export default class Modal {
  constructor(login, modal, fechar) {
    this.login = document.querySelector(login);
    this.modal = document.querySelector(modal);
    this.botaoFechar = document.querySelector(fechar);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickFora = this.clickFora.bind(this);
  }

  toggleModal() {
    this.modal.classList.toggle('ativo');
  }

  eventToggleModal(e) {
    e.preventDefault();
    this.toggleModal();
  }

  clickFora(e) {
    if (e.target === this.modal) {
      this.toggleModal();
    }
  }

  event() {
    this.login.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.modal.addEventListener('click', this.clickFora);
  }

  init() {
    this.event();
    return this;
  }
}

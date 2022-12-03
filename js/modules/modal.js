export default class Modal {
  constructor(login, modal, fechar) {
    this.login = document.querySelector(login);
    this.modal = document.querySelector(modal);
    this.botaoFechar = document.querySelector(fechar);

    this.toggleModal = this.toggleModal.bind(this);
    this.clickFora = this.clickFora.bind(this);
  }

  toggleModal() {
    this.modal.classList.toggle('ativo');
  }

  clickFora(e) {
    if (e.target === this.modal) {
      this.toggleModal();
    }
  }

  event() {
    this.login.addEventListener('click', this.toggleModal);
    this.botaoFechar.addEventListener('click', this.toggleModal);
    this.modal.addEventListener('click', this.clickFora);
  }

  init() {
    this.event();
    return this;
  }
}

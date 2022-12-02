export default class Perguntas {
  constructor(dt) {
    this.dt = document.querySelectorAll(dt);
  }

  ativarPergunta() {
    this.nextElementSibling.classList.toggle('ativo');
  }

  event() {
    this.dt.forEach((pergunta) => {
      pergunta.addEventListener('click', this.ativarPergunta);
    });
  }

  init() {
    this.event();
    return this;
  }
}

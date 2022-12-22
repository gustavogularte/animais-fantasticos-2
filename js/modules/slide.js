export default class Slide {
  constructor(container, slide) {
    this.container = document.querySelector(container);
    this.slide = document.querySelector(slide);
    this.dist = { posicaoFinal: 0, começo: 0, movimento: 0 };
  }

  moverSlide(distX) {
    this.dist.ultimaPosicao = distX;
    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;
  }

  parar() {
    this.container.removeEventListener('mousemove', this.mover);
    this.dist.posicaoFinal = this.dist.ultimaPosicao;
  }

  mover(e) {
    this.dist.movimento = (this.dist.começo - e.clientX) * 1.6;
    const posicaoFinal = this.dist.posicaoFinal - this.dist.movimento;
    this.moverSlide(posicaoFinal);
  }

  iniciar(e) {
    e.preventDefault();
    this.dist.começo = e.clientX;
    this.container.addEventListener('mousemove', this.mover);
  }

  event() {
    this.container.addEventListener('mousedown', this.iniciar);
    this.container.addEventListener('mouseup', this.parar);
  }

  bindEvents() {
    this.iniciar = this.iniciar.bind(this);
    this.mover = this.mover.bind(this);
    this.parar = this.parar.bind(this);
  }

  init() {
    this.bindEvents();
    this.event();
    return this;
  }
}

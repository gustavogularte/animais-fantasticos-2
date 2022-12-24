import debounce from './debounce.js';

export default class Slide {
  constructor(container, slide) {
    this.container = document.querySelector(container);
    this.slide = document.querySelector(slide);
    this.dist = { posicaoFinal: 0, começo: 0, movimento: 0 };
  }

  transition(ativo) {
    this.slide.style.transition = ativo ? 'transform .3s' : '';
  }

  moverSlide(distX) {
    this.dist.ultimaPosicao = distX;
    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;
  }

  parar(e) {
    const eventType = e.type === 'mouseup' ? 'mousemove' : 'touchmove';
    this.container.removeEventListener(eventType, this.mover);
    this.dist.posicaoFinal = this.dist.ultimaPosicao;
    this.transition(true);
    this.changeSlideOnEnd();
  }

  changeSlideOnEnd() {
    if (this.dist.movimento > 120 && this.index.next !== undefined) {
      this.activeNextSlide();
    } else if (this.dist.movimento < -120 && this.index.prev !== undefined) {
      this.activePrevSlide();
    } else {
      this.changeSlide(this.index.active);
    }
  }

  mover(e) {
    const eventType = e.type === 'mousemove' ? e.clientX : e.changedTouches[0].clientX;
    this.dist.movimento = (this.dist.começo - eventType) * 1.6;
    const posicaoFinal = this.dist.posicaoFinal - this.dist.movimento;
    this.moverSlide(posicaoFinal);
  }

  iniciar(e) {
    let movetype;
    if (e.type === 'mousedown') {
      e.preventDefault();
      this.dist.começo = e.clientX;
      movetype = 'mousemove';
    } else {
      this.dist.começo = e.changedTouches[0].clientX;
      movetype = 'touchmove';
    }
    this.container.addEventListener(movetype, this.mover);
    this.transition(false);
  }

  event() {
    this.container.addEventListener('mousedown', this.iniciar);
    this.container.addEventListener('touchstart', this.iniciar);
    this.container.addEventListener('mouseup', this.parar);
    this.container.addEventListener('touchend', this.parar);
  }

  bindEvents() {
    this.iniciar = this.iniciar.bind(this);
    this.mover = this.mover.bind(this);
    this.parar = this.parar.bind(this);

    this.activePrevSlide = this.activePrevSlide.bind(this);
    this.activeNextSlide = this.activeNextSlide.bind(this);

    this.onResize = debounce(this.onResize.bind(this), 200);
  }

  // slide config

  slidePosition(slide) {
    const margin = (this.container.offsetWidth - slide.offsetWidth) / 2;
    return -(slide.offsetLeft - margin);
  }

  slidesConfig() {
    this.slideArray = [...this.slide.children].map((element) => {
      const position = this.slidePosition(element);
      return {
        element,
        position,
      };
    });
  }

  slidesIndexNav(index) {
    const last = this.slideArray.length - 1;
    this.index = {
      prev: index ? index - 1 : undefined,
      active: index,
      next: index === last ? undefined : index + 1,
    };
  }

  changeSlide(index) {
    const activeSlide = this.slideArray[index];
    this.moverSlide(activeSlide.position);
    this.slidesIndexNav(index);
    this.dist.posicaoFinal = activeSlide.position;
    this.changeActiveClass();
  }

  changeActiveClass() {
    this.slideArray.forEach((item) => {
      item.element.classList.remove('ativo');
    });
    this.slideArray[this.index.active].element.classList.add('ativo');
  }

  activePrevSlide() {
    if (this.index.prev !== undefined) {
      this.changeSlide(this.index.prev);
    }
  }

  activeNextSlide() {
    if (this.index.next !== undefined) {
      this.changeSlide(this.index.next);
    }
  }

  onResize() {
    setTimeout(() => {
      this.slidesConfig();
      this.changeSlide(this.index.active);
    }, 1000);
  }

  addResizeEvent() {
    window.addEventListener('resize', this.onResize);
  }

  // Slide Nav

  addArrow(prev, next) {
    this.prevElement = document.querySelector(prev);
    this.nextElement = document.querySelector(next);
    this.transition(true);
    this.addArrowEvent();
  }

  addArrowEvent() {
    this.prevElement.addEventListener('click', this.activePrevSlide);
    this.nextElement.addEventListener('click', this.activeNextSlide);
  }

  init() {
    this.bindEvents();
    this.transition();
    this.event();
    this.slidesConfig();
    this.addResizeEvent();
    this.changeSlide(0);
    return this;
  }
}

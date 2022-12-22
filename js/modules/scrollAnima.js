import debounce from './debounce.js';

export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.7;

    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const sectionTop = section.offsetTop;
      const offset = Math.floor(sectionTop - this.windowMetade);
      return {
        element: section,
        offset,
      };
    });
  }

  checkDistance() {
    this.distance.forEach((section) => {
      if (window.scrollY > section.offset) {
        section.element.classList.add('ativo');
      }
    });
  }

  init() {
    this.getDistance();
    this.checkDistance();
    window.addEventListener('scroll', this.checkDistance);
    return this;
  }
}

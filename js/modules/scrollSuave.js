export default class ScrollSuave {
  constructor(links, options) {
    this.links = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }

    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(link) {
    link.preventDefault();
    const href = link.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  event() {
    this.links.forEach((link) => {
      link.addEventListener('click', this.scrollToSection);
    });
  }

  init() {
    this.event();
    return this;
  }
}

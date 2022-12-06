export default class ToolTip {
  constructor(tooltip) {
    this.tooltip = document.querySelector(tooltip);

    this.mouseEntrou = this.mouseEntrou.bind(this);
    this.mouseMoveu = this.mouseMoveu.bind(this);
    this.mouseSaiu = this.mouseSaiu.bind(this);
  }

  criarToolTipBox(e) {
    const tooltipBox = document.createElement('div');
    const text = e.getAttribute('aria-label');
    tooltipBox.innerText = text;
    tooltipBox.classList.add('tooltip');
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  mouseSaiu(e) {
    this.tooltipBox.remove();
    e.currentTarget.removeEventListener('mouseleave', this.mouseSaiu);
    e.currentTarget.removeEventListener('mousemove', this.mouseMoveu);
  }

  mouseMoveu(e) {
    this.tooltipBox.style.top = `${e.pageY + 20}px`;
    if (e.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${e.pageX - 200}px`;
    } else {
      this.tooltipBox.style.left = `${e.pageX + 20}px`;
    }
  }

  mouseEntrou(e) {
    this.criarToolTipBox(e.currentTarget);

    e.currentTarget.addEventListener('mouseleave', this.mouseSaiu);
    e.currentTarget.addEventListener('mousemove', this.mouseMoveu);
  }

  event() {
    this.tooltip.addEventListener('mouseover', this.mouseEntrou);
  }

  init() {
    this.event();
    return this;
  }
}

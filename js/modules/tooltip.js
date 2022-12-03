export default class ToolTip {
  constructor(tooltip) {
    this.tooltip = document.querySelector(tooltip);

    this.mouseEntrou = this.mouseEntrou.bind(this);
  }

  criarToolTipBox(e) {
    const tooltipBox = document.createElement('div');
    const text = e.getAttribute('aria-label');
    tooltipBox.innerText = text;
    tooltipBox.classList.add('tooltip');
    console.log(tooltipBox)
  }

  mouseEntrou(e) {
    this.criarToolTipBox(e.currentTarget);
  }

  event() {
    this.tooltip.addEventListener('mouseover', this.mouseEntrou);
  }

  init() {
    this.event();
    return this;
  }
}

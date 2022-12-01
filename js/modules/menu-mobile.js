export default class MenuMobile {
  constructor(menu, menuList) {
    this.menu = document.querySelector(menu);
    this.menuList = document.querySelector(menuList);

    this.ativarMenu = this.ativarMenu.bind(this);
  }

  ativarMenu() {
    this.menuList.classList.toggle('ativo');
  }

  event() {
    this.menu.addEventListener('click', this.ativarMenu);
  }

  init() {
    this.event();
  }
}

export default class AnimaisNav {
  constructor(principal, thumbs, descricao) {
    this.principal = document.querySelector(principal);
    this.thumbs = document.querySelectorAll(thumbs);
    this.descricao = document.querySelectorAll(descricao);

    this.trocarImagem = this.trocarImagem.bind(this);
    this.trocarDescricao = this.trocarDescricao.bind(this);
  }

  trocarImagem(img, index) {
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    this.principal.setAttribute('src', src);
    this.principal.setAttribute('alt', alt);

    this.trocarDescricao(index);
  }

  trocarDescricao(index) {
    this.descricao.forEach((item) => {
      item.classList.remove('ativo');
    });

    this.descricao[index].classList.add('ativo');
  }

  event() {
    this.thumbs.forEach((img, index) => {
      img.addEventListener('click', () => this.trocarImagem(img, index));
    });
  }

  init() {
    this.event();
    return this;
  }
}

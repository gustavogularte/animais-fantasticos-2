import MenuMobile from './modules/menu-mobile.js';
import AnimaisNav from './modules/animaisNav.js';
import Perguntas from './modules/peguntas.js';
import Horario from './modules/horario.js';

const menuMobile = new MenuMobile('[data-menu="botao"]', '.menu-lista');
menuMobile.init();

const animaisNav = new AnimaisNav('.animal-destaque img', '.animais-thumbs img', '.animais-descricao section');
animaisNav.init();

const perguntas = new Perguntas('.perguntas dt');
perguntas.init();

const horario = new Horario('.horario');
horario.init();

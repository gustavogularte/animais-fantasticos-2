/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/animaisNav.js":
/*!**********************************!*\
  !*** ./js/modules/animaisNav.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimaisNav)\n/* harmony export */ });\nclass AnimaisNav {\n  constructor(principal, thumbs, descricao) {\n    this.principal = document.querySelector(principal);\n    this.thumbs = document.querySelectorAll(thumbs);\n    this.descricao = document.querySelectorAll(descricao);\n\n    this.trocarImagem = this.trocarImagem.bind(this);\n    this.trocarDescricao = this.trocarDescricao.bind(this);\n  }\n\n  trocarImagem(img, index) {\n    const src = img.getAttribute('src');\n    const alt = img.getAttribute('alt');\n    this.principal.setAttribute('src', src);\n    this.principal.setAttribute('alt', alt);\n\n    this.trocarDescricao(index);\n  }\n\n  trocarDescricao(index) {\n    this.descricao.forEach((item) => {\n      item.classList.remove('ativo');\n    });\n\n    this.descricao[index].classList.add('ativo');\n  }\n\n  event() {\n    this.thumbs.forEach((img, index) => {\n      img.addEventListener('click', () => this.trocarImagem(img, index));\n    });\n  }\n\n  init() {\n    this.event();\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos-2/./js/modules/animaisNav.js?");

/***/ }),

/***/ "./js/modules/debounce.js":
/*!********************************!*\
  !*** ./js/modules/debounce.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(callback, delay) {\n  let timer;\n  return (...args) => {\n    if (timer) clearTimeout(timer);\n    timer = setTimeout(() => {\n      callback(...args);\n      timer = null;\n    }, delay);\n  };\n}\n\n\n//# sourceURL=webpack://animais-fantasticos-2/./js/modules/debounce.js?");

/***/ }),

/***/ "./js/modules/horario.js":
/*!*******************************!*\
  !*** ./js/modules/horario.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Horario)\n/* harmony export */ });\nclass Horario {\n  constructor(infoHorario) {\n    this.infoHorario = document.querySelector(infoHorario);\n  }\n\n  funcionamento() {\n    this.horarios = this.infoHorario.dataset.horarios.split(',').map(Number);\n    this.dias = this.infoHorario.dataset.dias.split(',').map(Number);\n  }\n\n  agora() {\n    this.agora = new Date();\n    this.horaAtual = this.agora.getHours();\n    this.diaAtual = this.agora.getDay();\n  }\n\n  status() {\n    this.horarioStatus = this.horaAtual >= this.horarios[0] && this.horaAtual <= this.horarios[1];\n    this.diaStatus = !!this.dias.includes(this.diaAtual);\n    return this.horarioStatus && this.diaStatus;\n  }\n\n  ativarStatus() {\n    if (this.status()) {\n      this.infoHorario.classList.add('aberto');\n    } else {\n      this.infoHorario.classList.add('fechado');\n    }\n  }\n\n  init() {\n    this.funcionamento();\n    this.agora();\n    this.ativarStatus();\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos-2/./js/modules/horario.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuMobile)\n/* harmony export */ });\nclass MenuMobile {\n  constructor(menu, menuList) {\n    this.menu = document.querySelector(menu);\n    this.menuList = document.querySelector(menuList);\n\n    this.ativarMenu = this.ativarMenu.bind(this);\n  }\n\n  ativarMenu() {\n    this.menuList.classList.toggle('ativo');\n  }\n\n  event() {\n    this.menu.addEventListener('click', this.ativarMenu);\n  }\n\n  init() {\n    this.event();\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos-2/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\n  constructor(login, modal, fechar) {\n    this.login = document.querySelector(login);\n    this.modal = document.querySelector(modal);\n    this.botaoFechar = document.querySelector(fechar);\n\n    this.eventToggleModal = this.eventToggleModal.bind(this);\n    this.clickFora = this.clickFora.bind(this);\n  }\n\n  toggleModal() {\n    this.modal.classList.toggle('ativo');\n  }\n\n  eventToggleModal(e) {\n    e.preventDefault();\n    this.toggleModal();\n  }\n\n  clickFora(e) {\n    if (e.target === this.modal) {\n      this.toggleModal();\n    }\n  }\n\n  event() {\n    this.login.addEventListener('click', this.eventToggleModal);\n    this.botaoFechar.addEventListener('click', this.eventToggleModal);\n    this.modal.addEventListener('click', this.clickFora);\n  }\n\n  init() {\n    this.event();\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos-2/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/peguntas.js":
/*!********************************!*\
  !*** ./js/modules/peguntas.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Perguntas)\n/* harmony export */ });\nclass Perguntas {\n  constructor(dt) {\n    this.dt = document.querySelectorAll(dt);\n  }\n\n  ativarPergunta() {\n    this.nextElementSibling.classList.toggle('ativo');\n  }\n\n  event() {\n    this.dt.forEach((pergunta) => {\n      pergunta.addEventListener('click', this.ativarPergunta);\n    });\n  }\n\n  init() {\n    this.event();\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos-2/./js/modules/peguntas.js?");

/***/ }),

/***/ "./js/modules/scrollAnima.js":
/*!***********************************!*\
  !*** ./js/modules/scrollAnima.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollAnima)\n/* harmony export */ });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./js/modules/debounce.js\");\n\n\nclass ScrollAnima {\n  constructor(sections) {\n    this.sections = document.querySelectorAll(sections);\n    this.windowMetade = window.innerHeight * 0.7;\n\n    this.checkDistance = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.checkDistance.bind(this), 50);\n  }\n\n  getDistance() {\n    this.distance = [...this.sections].map((section) => {\n      const sectionTop = section.offsetTop;\n      const offset = Math.floor(sectionTop - this.windowMetade);\n      return {\n        element: section,\n        offset,\n      };\n    });\n  }\n\n  checkDistance() {\n    this.distance.forEach((section) => {\n      if (window.scrollY > section.offset) {\n        section.element.classList.add('ativo');\n      }\n    });\n  }\n\n  init() {\n    this.getDistance();\n    this.checkDistance();\n    window.addEventListener('scroll', this.checkDistance);\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos-2/./js/modules/scrollAnima.js?");

/***/ }),

/***/ "./js/modules/scrollSuave.js":
/*!***********************************!*\
  !*** ./js/modules/scrollSuave.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\nclass ScrollSuave {\n  constructor(links, options) {\n    this.links = document.querySelectorAll(links);\n    if (options === undefined) {\n      this.options = { behavior: 'smooth', block: 'start' };\n    } else {\n      this.options = options;\n    }\n\n    this.scrollToSection = this.scrollToSection.bind(this);\n  }\n\n  scrollToSection(link) {\n    link.preventDefault();\n    const href = link.currentTarget.getAttribute('href');\n    const section = document.querySelector(href);\n    section.scrollIntoView(this.options);\n  }\n\n  event() {\n    this.links.forEach((link) => {\n      link.addEventListener('click', this.scrollToSection);\n    });\n  }\n\n  init() {\n    this.event();\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos-2/./js/modules/scrollSuave.js?");

/***/ }),

/***/ "./js/modules/slide.js":
/*!*****************************!*\
  !*** ./js/modules/slide.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Slide)\n/* harmony export */ });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./js/modules/debounce.js\");\n\n\nclass Slide {\n  constructor(container, slide) {\n    this.container = document.querySelector(container);\n    this.slide = document.querySelector(slide);\n    this.dist = { posicaoFinal: 0, começo: 0, movimento: 0 };\n  }\n\n  transition(ativo) {\n    this.slide.style.transition = ativo ? 'transform .3s' : '';\n  }\n\n  moverSlide(distX) {\n    this.dist.ultimaPosicao = distX;\n    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;\n  }\n\n  parar(e) {\n    const eventType = e.type === 'mouseup' ? 'mousemove' : 'touchmove';\n    this.container.removeEventListener(eventType, this.mover);\n    this.dist.posicaoFinal = this.dist.ultimaPosicao;\n    this.transition(true);\n    this.changeSlideOnEnd();\n  }\n\n  changeSlideOnEnd() {\n    if (this.dist.movimento > 120 && this.index.next !== undefined) {\n      this.activeNextSlide();\n    } else if (this.dist.movimento < -120 && this.index.prev !== undefined) {\n      this.activePrevSlide();\n    } else {\n      this.changeSlide(this.index.active);\n    }\n  }\n\n  mover(e) {\n    const eventType = e.type === 'mousemove' ? e.clientX : e.changedTouches[0].clientX;\n    this.dist.movimento = (this.dist.começo - eventType) * 1.6;\n    const posicaoFinal = this.dist.posicaoFinal - this.dist.movimento;\n    this.moverSlide(posicaoFinal);\n  }\n\n  iniciar(e) {\n    let movetype;\n    if (e.type === 'mousedown') {\n      e.preventDefault();\n      this.dist.começo = e.clientX;\n      movetype = 'mousemove';\n    } else {\n      this.dist.começo = e.changedTouches[0].clientX;\n      movetype = 'touchmove';\n    }\n    this.container.addEventListener(movetype, this.mover);\n    this.transition(false);\n  }\n\n  event() {\n    this.container.addEventListener('mousedown', this.iniciar);\n    this.container.addEventListener('touchstart', this.iniciar);\n    this.container.addEventListener('mouseup', this.parar);\n    this.container.addEventListener('touchend', this.parar);\n  }\n\n  bindEvents() {\n    this.iniciar = this.iniciar.bind(this);\n    this.mover = this.mover.bind(this);\n    this.parar = this.parar.bind(this);\n\n    this.activePrevSlide = this.activePrevSlide.bind(this);\n    this.activeNextSlide = this.activeNextSlide.bind(this);\n\n    this.onResize = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.onResize.bind(this), 200);\n  }\n\n  // slide config\n\n  slidePosition(slide) {\n    const margin = (this.container.offsetWidth - slide.offsetWidth) / 2;\n    return -(slide.offsetLeft - margin);\n  }\n\n  slidesConfig() {\n    this.slideArray = [...this.slide.children].map((element) => {\n      const position = this.slidePosition(element);\n      return {\n        element,\n        position,\n      };\n    });\n  }\n\n  slidesIndexNav(index) {\n    const last = this.slideArray.length - 1;\n    this.index = {\n      prev: index ? index - 1 : undefined,\n      active: index,\n      next: index === last ? undefined : index + 1,\n    };\n  }\n\n  changeSlide(index) {\n    const activeSlide = this.slideArray[index];\n    this.moverSlide(activeSlide.position);\n    this.slidesIndexNav(index);\n    this.dist.posicaoFinal = activeSlide.position;\n    this.changeActiveClass();\n  }\n\n  changeActiveClass() {\n    this.slideArray.forEach((item) => {\n      item.element.classList.remove('ativo');\n    });\n    this.slideArray[this.index.active].element.classList.add('ativo');\n  }\n\n  activePrevSlide() {\n    if (this.index.prev !== undefined) {\n      this.changeSlide(this.index.prev);\n    }\n  }\n\n  activeNextSlide() {\n    if (this.index.next !== undefined) {\n      this.changeSlide(this.index.next);\n    }\n  }\n\n  onResize() {\n    setTimeout(() => {\n      this.slidesConfig();\n      this.changeSlide(this.index.active);\n    }, 1000);\n  }\n\n  addResizeEvent() {\n    window.addEventListener('resize', this.onResize);\n  }\n\n  // Slide Nav\n\n  addArrow(prev, next) {\n    this.prevElement = document.querySelector(prev);\n    this.nextElement = document.querySelector(next);\n    this.transition(true);\n    this.addArrowEvent();\n  }\n\n  addArrowEvent() {\n    this.prevElement.addEventListener('click', this.activePrevSlide);\n    this.nextElement.addEventListener('click', this.activeNextSlide);\n  }\n\n  init() {\n    this.bindEvents();\n    this.transition();\n    this.event();\n    this.slidesConfig();\n    this.addResizeEvent();\n    this.changeSlide(0);\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos-2/./js/modules/slide.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToolTip)\n/* harmony export */ });\nclass ToolTip {\n  constructor(tooltip) {\n    this.tooltip = document.querySelector(tooltip);\n\n    this.mouseEntrou = this.mouseEntrou.bind(this);\n    this.mouseMoveu = this.mouseMoveu.bind(this);\n    this.mouseSaiu = this.mouseSaiu.bind(this);\n  }\n\n  criarToolTipBox(e) {\n    const tooltipBox = document.createElement('div');\n    const text = e.getAttribute('aria-label');\n    tooltipBox.innerText = text;\n    tooltipBox.classList.add('tooltip');\n    document.body.appendChild(tooltipBox);\n    this.tooltipBox = tooltipBox;\n  }\n\n  mouseSaiu(e) {\n    this.tooltipBox.remove();\n    e.currentTarget.removeEventListener('mouseleave', this.mouseSaiu);\n    e.currentTarget.removeEventListener('mousemove', this.mouseMoveu);\n  }\n\n  mouseMoveu(e) {\n    this.tooltipBox.style.top = `${e.pageY + 20}px`;\n    if (e.pageX + 240 > window.innerWidth) {\n      this.tooltipBox.style.left = `${e.pageX - 200}px`;\n    } else {\n      this.tooltipBox.style.left = `${e.pageX + 20}px`;\n    }\n  }\n\n  mouseEntrou(e) {\n    this.criarToolTipBox(e.currentTarget);\n\n    e.currentTarget.addEventListener('mouseleave', this.mouseSaiu);\n    e.currentTarget.addEventListener('mousemove', this.mouseMoveu);\n  }\n\n  event() {\n    this.tooltip.addEventListener('mouseover', this.mouseEntrou);\n  }\n\n  init() {\n    this.event();\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos-2/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_animaisNav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/animaisNav.js */ \"./js/modules/animaisNav.js\");\n/* harmony import */ var _modules_peguntas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/peguntas.js */ \"./js/modules/peguntas.js\");\n/* harmony import */ var _modules_horario_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/horario.js */ \"./js/modules/horario.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_scrollSuave_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/scrollSuave.js */ \"./js/modules/scrollSuave.js\");\n/* harmony import */ var _modules_scrollAnima_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/scrollAnima.js */ \"./js/modules/scrollAnima.js\");\n/* harmony import */ var _modules_slide_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/slide.js */ \"./js/modules/slide.js\");\n\n\n\n\n\n\n\n\n\n\nconst menuMobile = new _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"botao\"]', '.menu-lista');\nmenuMobile.init();\n\nconst animaisNav = new _modules_animaisNav_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('.animal-destaque img', '.animais-thumbs img', '.animais-descricao section');\nanimaisNav.init();\n\nconst perguntas = new _modules_peguntas_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('.perguntas dt');\nperguntas.init();\n\nconst horario = new _modules_horario_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('.horario');\nhorario.init();\n\nconst modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('[data-modal=\"abrir\"]', '[data-modal=\"container\"]', '[data-modal=\"fechar\"]');\nmodal.init();\n\nconst tooltip = new _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]('[data-tooltip]');\ntooltip.init();\n\nconst scrollSuave = new _modules_scrollSuave_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]('a[href^=\"#\"]');\nscrollSuave.init();\n\nconst scrollAnima = new _modules_scrollAnima_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]('[data-anima=\"scroll\"]');\nscrollAnima.init();\n\nconst slide = new _modules_slide_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]('.slide-container', '.slide');\nslide.init();\nslide.addArrow('.prev', '.next');\n\n\n//# sourceURL=webpack://animais-fantasticos-2/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;
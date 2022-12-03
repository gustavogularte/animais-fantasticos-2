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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\n  constructor(login, modal, fechar) {\n    this.login = document.querySelector(login);\n    this.modal = document.querySelector(modal);\n    this.botaoFechar = document.querySelector(fechar);\n\n    this.toggleModal = this.toggleModal.bind(this);\n    this.clickFora = this.clickFora.bind(this);\n  }\n\n  toggleModal() {\n    this.modal.classList.toggle('ativo');\n  }\n\n  clickFora(e) {\n    if (e.target === this.modal) {\n      this.toggleModal();\n    }\n  }\n\n  event() {\n    this.login.addEventListener('click', this.toggleModal);\n    this.botaoFechar.addEventListener('click', this.toggleModal);\n    this.modal.addEventListener('click', this.clickFora);\n  }\n\n  init() {\n    this.event();\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos-2/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/peguntas.js":
/*!********************************!*\
  !*** ./js/modules/peguntas.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Perguntas)\n/* harmony export */ });\nclass Perguntas {\n  constructor(dt) {\n    this.dt = document.querySelectorAll(dt);\n  }\n\n  ativarPergunta() {\n    this.nextElementSibling.classList.toggle('ativo');\n  }\n\n  event() {\n    this.dt.forEach((pergunta) => {\n      pergunta.addEventListener('click', this.ativarPergunta);\n    });\n  }\n\n  init() {\n    this.event();\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos-2/./js/modules/peguntas.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToolTip)\n/* harmony export */ });\nclass ToolTip {\n  constructor(tooltip) {\n    this.tooltip = document.querySelector(tooltip);\n\n    this.mouseEntrou = this.mouseEntrou.bind(this);\n  }\n\n  criarToolTipBox(e) {\n    const tooltipBox = document.createElement('div');\n    const text = e.getAttribute('aria-label');\n    tooltipBox.innerText = text;\n    tooltipBox.classList.add('tooltip');\n    console.log(tooltipBox)\n  }\n\n  mouseEntrou(e) {\n    this.criarToolTipBox(e.currentTarget);\n  }\n\n  event() {\n    this.tooltip.addEventListener('mouseover', this.mouseEntrou);\n  }\n\n  init() {\n    this.event();\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos-2/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_animaisNav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/animaisNav.js */ \"./js/modules/animaisNav.js\");\n/* harmony import */ var _modules_peguntas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/peguntas.js */ \"./js/modules/peguntas.js\");\n/* harmony import */ var _modules_horario_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/horario.js */ \"./js/modules/horario.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n\n\n\n\n\n\n\nconst menuMobile = new _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"botao\"]', '.menu-lista');\nmenuMobile.init();\n\nconst animaisNav = new _modules_animaisNav_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('.animal-destaque img', '.animais-thumbs img', '.animais-descricao section');\nanimaisNav.init();\n\nconst perguntas = new _modules_peguntas_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('.perguntas dt');\nperguntas.init();\n\nconst horario = new _modules_horario_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('.horario');\nhorario.init();\n\nconst modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('[data-modal=\"abrir\"]', '[data-modal=\"container\"]', '[data-modal=\"fechar\"]');\nmodal.init();\n\nconst tooltip = new _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]('[data-tooltip]');\ntooltip.init();\n\n\n//# sourceURL=webpack://animais-fantasticos-2/./js/script.js?");

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
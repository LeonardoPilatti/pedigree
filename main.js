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

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\n\nclass DropdownMenu {\n  constructor(dropdownMenus, events) {\n    this.dropdownMenus = document.querySelectorAll(dropdownMenus);\n\n    // define touchstart e click como argumento padrão\n    // de events caso o usuário não define\n    if (events === undefined) this.events = ['touchstart', 'click'];\n    else this.events = events;\n\n    this.activeClass = 'active';\n    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);\n  }\n\n  // Ativa o dropdownmenu e adiciona\n  // a função que observa o clique fora dele\n  activeDropdownMenu(event) {\n    //event.preventDefault();\n    const element = event.currentTarget;\n    element.classList.add(this.activeClass);\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__.default)(element, this.events, () => {\n      element.classList.remove('active');\n    });\n  }\n\n  // adiciona os eventos ao dropdownmenu\n  addDropdownMenusEvent() {\n    this.dropdownMenus.forEach((menu) => {\n      this.events.forEach((userEvent) => {\n        menu.addEventListener(userEvent, this.activeDropdownMenu);\n      });\n    });\n  }\n\n  init() {\n    if (this.dropdownMenus.length) {\n      this.addDropdownMenusEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://pedigree/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\n\nclass MenuMobile {\n  constructor(menuButton, menuList, events) {\n    this.menuButton = document.querySelector(menuButton);\n    this.menuList = document.querySelector(menuList);\n    this.activeClass = 'active';\n\n    // define touchstart e click como argumento padrão\n    // de events caso o usuário não define\n    if (events === undefined) this.events = ['touchstart', 'click'];\n    else this.events = events;\n\n    this.openMenu = this.openMenu.bind(this);\n  }\n\n  openMenu() {\n    this.menuList.classList.add(this.activeClass);\n    this.menuButton.classList.add(this.activeClass);\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__.default)(this.menuList, this.events, () => {\n      this.menuList.classList.remove(this.activeClass);\n      this.menuButton.classList.remove(this.activeClass);\n    });\n  }\n\n  addMenuMobileEvents() {\n    this.events.forEach(evento => this.menuButton.addEventListener(evento, this.openMenu));\n  }\n\n  init() {\n    if (this.menuButton && this.menuList) {\n      this.addMenuMobileEvents();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://pedigree/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\n  constructor(botaoAbrir, botaoFechar, containerModal) {\n    this.botaoAbrir = document.querySelector(botaoAbrir);\n    this.botaoFechar = document.querySelector(botaoFechar);\n    this.containerModal = document.querySelector(containerModal);\n\n    // bind this ao callback para\n    // fazer referência ao objeto\n    // da classe\n    this.eventToggleModal = this.eventToggleModal.bind(this);\n    this.cliqueForaModal = this.cliqueForaModal.bind(this);\n  }\n\n  // abre ou fecha o modal\n  toggleModal() {\n    this.containerModal.classList.toggle('ativo');\n  }\n\n  // adiciona o evento de toggle ao modal\n  eventToggleModal(event) {\n    event.preventDefault();\n    this.toggleModal();\n  }\n\n  // fecha o modal ao clicar do lado de fora\n  cliqueForaModal(event) {\n    if (event.target === this.containerModal) {\n      this.toggleModal();\n    }\n  }\n\n  // adiciona os eventos aos elementos do modal\n  addModalEvents() {\n    this.botaoAbrir.addEventListener('click', this.eventToggleModal);\n    this.botaoFechar.addEventListener('click', this.eventToggleModal);\n    this.containerModal.addEventListener('click', this.cliqueForaModal);\n  }\n\n  init() {\n    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {\n      this.addModalEvents();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://pedigree/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outsideclick.js":
/*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n  const html = document.documentElement;\n  const outside = 'data-outside';\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach((userEvent) => {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      });\n      callback();\n    }\n  }\n\n  if (!element.hasAttribute(outside)) {\n    events.forEach((userEvent) => {\n      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));\n    });\n    element.setAttribute(outside, '');\n  }\n}\n\n\n//# sourceURL=webpack://pedigree/./js/modules/outsideclick.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n\r\n\r\n\r\n\r\nconst modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_0__.default('[data-modal=\"abrir\"]', '[data-modal=\"fechar\"]', '[data-modal=\"container\"]');\r\nmodal.init();\r\n\r\nconst dropdownMenu = new _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_1__.default('[data-dropdown]');\r\ndropdownMenu.init();\r\n\r\nconst menuMobile = new _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_2__.default('[data-menu=\"button\"]', '[data-menu=\"list\"]');\r\nmenuMobile.init();\r\n\r\n\r\n//// para fazer a animação no menu\r\nvar header = document.querySelector('.header'); // elemento alvo\r\nvar numPx = '150'; // Quantidade de pixels a contar do TOP até definir a cor\r\n\r\nfunction animaCor() {\r\n  if (window.scrollY > numPx) {\r\n    header.classList.add('mudaCor'); // adiciona classe \"mudaCor\"\r\n  } else {\r\n    header.classList.remove('mudaCor'); // remove classe \"mudaCor\"\r\n  }\r\n}\r\n\r\nanimaCor();\r\n\r\nwindow.addEventListener('scroll', animaCor);\r\n \r\n\r\nvar btn = document.querySelector(\".back-to-top\");\r\nbtn.addEventListener(\"click\", function() {\r\n    window.scrollTo(0, 0);\r\n});\r\n\r\n//// slide background:\r\nlet totalSlides = document.querySelectorAll('.slider--item').length;  /// estou selecionando todos os slider--item e pegando até o ultimo com o .length;\r\nlet currentSlide = 0;\r\n\r\nconst prev = document.querySelector('[data-prev]');\r\nconst next = document.querySelector('[data-next]');\r\n\r\ndocument.querySelector('.slider--width').style.width = `calc(100vw * ${totalSlides})`;\r\ndocument.querySelector('.slider-controls').style.height = `${document.querySelector('.slider').clientHeight}px`;  /// aqui é para os controles do slide ficarem na metade do tamanho do .slider\r\n\r\nfunction updateMargin() {\r\n  let sliderItemWidth= document.querySelector('.slider--item').clientWidth;\r\n  let newMargin = (currentSlide * sliderItemWidth);\r\n  document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;\r\n}\r\n\r\n\r\nfunction goPrev() {\r\n  currentSlide--;\r\n  if(currentSlide < 0) {\r\n    currentSlide = totalSlides - 1;\r\n  }\r\n  updateMargin();\r\n}\r\n\r\nfunction goNext() {\r\n  currentSlide++;\r\n  if(currentSlide > (totalSlides - 1)) {\r\n    currentSlide = 0;\r\n  }\r\n  updateMargin();\r\n}\r\n\r\nprev.addEventListener('click', goPrev);\r\nnext.addEventListener('click', goNext);\r\n\r\n\r\n\r\n\r\n\r\nsetInterval(goNext, 5000)\r\n\r\n\n\n//# sourceURL=webpack://pedigree/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
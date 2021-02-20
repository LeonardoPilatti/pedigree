import Modal from './modules/modal.js';
import DropdownMenu from './modules/dropdown-menu.js';
import MenuMobile from './modules/menu-mobile.js';

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();


//// para fazer a animação no menu
var header = document.querySelector('.header'); // elemento alvo
var numPx = '150'; // Quantidade de pixels a contar do TOP até definir a cor

function animaCor() {
  if (window.scrollY > numPx) {
    header.classList.add('mudaCor'); // adiciona classe "mudaCor"
  } else {
    header.classList.remove('mudaCor'); // remove classe "mudaCor"
  }
}

animaCor();

window.addEventListener('scroll', animaCor);

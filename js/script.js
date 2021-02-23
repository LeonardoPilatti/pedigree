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
 

var btn = document.querySelector(".back-to-top");
btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});

//// slide background:
let totalSlides = document.querySelectorAll('.slider--item').length;  /// estou selecionando todos os slider--item e pegando até o ultimo com o .length;
let currentSlide = 0;

const prev = document.querySelector('[data-prev]');
const next = document.querySelector('[data-next]');

document.querySelector('.slider--width').style.width = `calc(100vw * ${totalSlides})`;
document.querySelector('.slider-controls').style.height = `${document.querySelector('.slider').clientHeight}px`;  /// aqui é para os controles do slide ficarem na metade do tamanho do .slider

function updateMargin() {
  let sliderItemWidth= document.querySelector('.slider--item').clientWidth;
  let newMargin = (currentSlide * sliderItemWidth);
  document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;
}


function goPrev() {
  currentSlide--;
  if(currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }
  updateMargin();
}

function goNext() {
  currentSlide++;
  if(currentSlide > (totalSlides - 1)) {
    currentSlide = 0;
  }
  updateMargin();
}

prev.addEventListener('click', goPrev);
next.addEventListener('click', goNext);





setInterval(goNext, 5000)


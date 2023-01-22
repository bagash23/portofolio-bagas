// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// scroll to top
function scrollToTop() {
  const scrollTop = document.querySelector("#scroll-top");
  if (window.pageYOffset > 500) {
    scrollTop.classList.add("show-scroll-top");
  } else {
    scrollTop.classList.remove("show-scroll-top");
  }
}
window.addEventListener("scroll", scrollToTop);

let carouselSlider = document.querySelector("#carousel_slider");
let list = document.querySelector("#carousel_list");
let item = document.querySelectorAll("#carousel_item");
let list2;

const speed = 1;

const width = list.offsetWidth;
let x = 0;
let x2 = width;

function clone() {
  list2 = list.cloneNode(true);
  carouselSlider.appendChild(list2);
  list2.style.left = `${width}px`;
}

function moveFirst() {
  x -= speed;

  if (width >= Math.abs(x)) {
    list.style.left = `${x}px`;
  } else {
    x = width;
  }
}

function moveSecond() {
  x2 -= speed;

  if (list2.offsetWidth >= Math.abs(x2)) {
    list2.style.left = `${x2}px`;
  } else {
    x2 = width;
  }
}

function hover() {
  clearInterval(a);
  clearInterval(b);
}

function unhover() {
  a = setInterval(moveFirst, 10);
  b = setInterval(moveSecond, 10);
}

clone();

let a = setInterval(moveFirst, 10);
let b = setInterval(moveSecond, 10);

carouselSlider.addEventListener("mouseenter", hover);
carouselSlider.addEventListener("mouseleave", unhover);

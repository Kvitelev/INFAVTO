const swiper = new Swiper(".slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  keyboard: true,
});

const servicesSwiper = new Swiper(".services__slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    834: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 3,
    },
  }
});

const productionNumbersSwiper = new Swiper(".production-numbers__slider", {
  lazy: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
});

const gallery = new Swiper(".gallery", {
  spaceBetween: 10,
  slidesPerView: 1,
  watchSlidesProgress: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

const headerBtn = document.querySelector('.header__btn');
const burger = document.querySelector('.burger');
const close = document.querySelector('.close');
const menu = document.querySelector('.nav');

const btnPopupOpen = document.querySelector('.assistance__btn');
const btnPopupClose = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');

headerBtn.addEventListener('click', () => {
  if (menu.classList.contains('header__nav')) {
    menu.style.display = 'block';
    burger.style.display = 'none';
    close.style.display = 'block';
    menu.classList.remove('header__nav');
  }
  else {
    menu.style.display = 'none';
    burger.style.display = 'block';
    close.style.display = 'none';
    menu.classList.add('header__nav');
  }
})

btnPopupOpen.addEventListener('click', () => {
  popup.style.display = 'block';
})

btnPopupClose.addEventListener('click', () => {
    popup.style.display = 'none';
})

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    popup.style.display = 'none';
  }
})

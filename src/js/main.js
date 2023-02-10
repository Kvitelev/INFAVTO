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
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
});

const servicesSwiper = new Swiper(".services__slider", {
  effect: "cards",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1340: {
      slidesPerView: 3,
      spaceBetween: 30,
      effect: "none",
    },
  }
});

const productionNumbersSwiper = new Swiper(".production-numbers__slider", {
  effect: "flip",
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
});

const headerBtn = document.querySelector('.header__btn');
const burger = document.querySelector('.burger');
const close = document.querySelector('.close');
const menu = document.querySelector('.nav');

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

ymaps.ready(init);
function init() {
  const center = [55.793146, 37.390676];
  const myMap = new ymaps.Map(document.querySelector('.map'), {
      center: center,
      zoom: 15,
      controls: [],
  });
  const myPlacemark = new ymaps.Placemark(center, {
      hintContent: 'INFAVTO',
  }, {
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Изображение иконки метки
    iconImageHref: 'img/svg/marker.svg',
    // Размеры метки
    iconImageSize: [40, 40],
    // Смещение иконки
    iconImageOffset: [-20, -25]
  });
  myMap.geoObjects.add(myPlacemark);
}

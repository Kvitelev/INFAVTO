// Слайдер header
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
});

// Слайдер services
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

// Слайдер reviews
const reviewsSwiper = new Swiper(".reviews__slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
  breakpoints: {
    834: {
      spaceBetween: 0,
      slidesPerView: 2,
    },
    1140: {
      spaceBetween: 0,
      slidesPerView: 3,
    },
    1440: {
      spaceBetween: -100,
      slidesPerView: 3,
    },
    1920: {
      spaceBetween: -200,
      slidesPerView: 3,
    },
  }
});

// Слайдер production-numbers
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

// Слайдер gallery
const gallerySwiper = new Swiper(".gallery", {
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

// Меню mobile
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

// Карта
ymaps.ready(init);
function init() {
  const center = [55.792801, 37.380870];
  const placemark = [55.793146, 37.390676];
  const myMap = new ymaps.Map(document.querySelector('.map'), {
      center: center,
      zoom: 14,
      controls: [],
  });
  const myPlacemark = new ymaps.Placemark(placemark, {
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

// Контакты popup
const contactsPopup = document.querySelector('.contacts__content');
const contactsBtnOpen = document.querySelector('.contacts__btn-open');
const contactsBtnClose = document.querySelector('.contacts__btn-close');

contactsBtnOpen.addEventListener('click', () => {
  contactsPopup.style.display = 'block';
})

contactsBtnClose.addEventListener('click', () => {
  contactsPopup.style.display = 'none';
})

// Кнопка прокрутки наверх
const btnScrollTop = document.querySelector('.btn-scroll-top');

btnScrollTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
})

window.onscroll = () => {
  if (window.scrollY > 0) {
    btnScrollTop.style.display = "visible";
    btnScrollTop.style.opacity = 1;
  }
  else {
    btnScrollTop.style.display = "hidden";
    btnScrollTop.style.opacity = 0;
  }
};

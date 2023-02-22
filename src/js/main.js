// Слайдер header
const swiper = new Swiper(".slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
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
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
});

// Слайдер services-content
const servicesContentSwiper = new Swiper(".services-content__slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
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
      slidesPerView: 3,
    },
  }
});

//Фотогалерея
const photoGallery = new Swiper(".photo-gallery__content", {
  spaceBetween: 30,
  slidesPerView: 1,
  freeMode: true,
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

const navItem = document.querySelectorAll('.nav__item');
const navListServices = document.querySelector('.nav__list--services');
const mediaTablet = window.matchMedia("(min-width: 834px)");

headerBtn.addEventListener('click', () => {
  if (menu.classList.contains('header__nav')) {
    menu.style.display = 'block';
    burger.style.display = 'none';
    close.style.display = 'block';
    menu.classList.remove('header__nav');
    menu.classList.add('animation-1');
  }
  else {
    menu.style.display = 'none';
    burger.style.display = 'block';
    close.style.display = 'none';
    menu.classList.add('header__nav');
  }
})

if (mediaTablet.matches) {
  for (let i = 0; i < navItem.length; i++) {
    navItem[2].addEventListener('mouseover', () => {
      navListServices.style.display = 'block';
      navListServices.classList.add('animation-2');
    })
    navItem[i].addEventListener('mouseover', () => {
      navListServices.style.display = 'none';
    })
  }

  navListServices.addEventListener('mouseout', () => {
    navListServices.style.display = 'none';
  })
}

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
  contactsPopup.classList.add('animation-1');
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

// Всплывающий сертификат
const certificatPopup = document.querySelector('.certificate-popup');
const certificateOpen = document.querySelector('.production-numbers__slide-btn--certificate-open');
const certificateClose = document.querySelector('.certificate-popup__btn');

certificateOpen.addEventListener('click', () => {
  certificatPopup.style.display = 'block';
  certificatPopup.classList.add('ainimation-popup');
})

certificateClose.addEventListener('click', () => {
  certificatPopup.style.display = 'none';
})

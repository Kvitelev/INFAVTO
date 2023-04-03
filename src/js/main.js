// Слайдер header
const options = {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
};

switch (location.pathname) {
  case '/dublikat-gos-nomer.html':
    options.initialSlide = 1;
    delete options.autoplay;
  break;
  case '/blatnoi-nomer.html':
    options.initialSlide = 2;
    delete options.autoplay;
  break;
  case '/help-gibdd.html':
    options.initialSlide = 3;
    delete options.autoplay;
  break;
  // case '/.html':
  //   options.initialSlide = 4;
  //   delete options.autoplay;
  //   break;
}

const headerSwiper = new Swiper(".header__slider", options);

// Слайдер reviews
const reviewsSwiper = new Swiper(".reviews__slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  grabCursor: true,
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
  freeMode: true,
  speed: 600,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
});

// Слайдер services-content
const servicesContentSwiper = new Swiper(".services-content__slider", {
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
      slidesPerView: 3,
    },
  },
  keyboard: {
    enabled: true,
  },
});

// Фотогалерея
const photoGallery = new Swiper(".photo-gallery__content", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  initialSlide: 1,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 0,
    modifier: 1,
    slideShadows: true,
  },
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
  breakpoints: {
    690: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 3,
    },
  }
});

// Фотогалерея красивого гос номера
const coolNumberSlider = new Swiper(".coolNumber-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  initialSlide: 1,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 0,
    modifier: 1,
    slideShadows: true,
  },
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
  breakpoints: {
    690: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 3,
    },
  }
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
    menu.classList.add('animation-top');
    headerBtn.classList.remove('header__btn-style');
  }
  else {
    menu.style.display = 'none';
    burger.style.display = 'block';
    close.style.display = 'none';
    menu.classList.add('header__nav');
    headerBtn.classList.add('header__btn-style');
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
  contactsPopup.classList.add('animation-left');
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

// Всплывающие окно в карточке товара c использованием делегирование событи
const productsList = document.querySelector('.products-card__list');
const tipBtns = document.querySelectorAll('.products-card__tip');
const tipBtnsClose = document.querySelectorAll('.products-card__btn-close');
const productsCardPopup = document.querySelectorAll('.products-card__popup');

const openPopupTip = (element, index) => {
  productsCardPopup[index].style.display = 'block';
  element.style.display = 'none';
  productsCardPopup[index].classList.add('ainimation-product-cart');
};

const closePopupTip = (index) => {
  productsCardPopup[index].style.display = 'none';
    tipBtns[index].style.display = 'block';
    tipBtns[index].classList.add('ainimation-product-cart');
};

productsList.addEventListener('click', (evt) => {
  tipBtns.forEach((element, index) => {
    if (evt.target === element) {
      openPopupTip(element, index);
    }
  });
});

tipBtnsClose.forEach((btnColse, index) => {
  btnColse.addEventListener('click', () => {
    closePopupTip(index);
  });
});

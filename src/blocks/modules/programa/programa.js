import Swiper from 'swiper';

var programa = new Swiper('.programa__row', {
    direction: 'horizontal',
    slidesPerView:3,
    slideVisibleClass: 'none',
    spaceBetween:40,
    centeredSlides: false,
    navigation: {
      nextEl: '.programa__next',
      prevEl: '.programa__prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      680: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      820: {
        slidesPerView: 3,
        spaceBetween: 30
      },
    }
  });

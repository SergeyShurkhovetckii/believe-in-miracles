import Swiper from 'swiper';

var swiper = new Swiper('.programa__row', {
    slidesPerView:3,
    spaceBetween:40,
    width:245,
    centeredSlides: false,
    navigation: {
      nextEl: '.programa__next',
      prevEl: '.programa__prev',
    },
  });

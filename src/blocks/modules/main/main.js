import Swiper from 'swiper';

var swiper = new Swiper('.main-swiper', {
  slidesPerView:1,
  navigation: {
    nextEl: '.main-swiper__next',
    prevEl: '.main-swiper__prev',
  },
});
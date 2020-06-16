import Swiper from 'swiper';

var mainswiper = new Swiper('.main-swiper', {
  direction: 'horizontal',
  slidesPerView:1,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.main-swiper__next',
    prevEl: '.main-swiper__prev',
    disabledClass: 'main-swiper--disabled'
  },
});
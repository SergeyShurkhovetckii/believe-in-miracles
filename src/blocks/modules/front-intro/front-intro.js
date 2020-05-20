import Swiper from 'swiper';

var introSlider = new Swiper ('.front-intro__slider', {
    // Optional parameters
    direction: 'horizontal',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      disabledClass: 'front-intro__swipe--disabled',
    },
  })

import Swiper from 'swiper';

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 47,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,

    navigation: {
      nextEl: '.parther-swiper__next',
      prevEl: '.parther-swiper__prev',
    },
  });
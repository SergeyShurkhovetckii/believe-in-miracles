import Swiper from 'swiper';

var programa = new Swiper('.programa__row', {
    slidesPerView:3,
    spaceBetween:40,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
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

import Swiper from 'swiper';
/*
var introSlider = new Swiper ('.front-intro__slider', {
    // Optional parameters
    direction: 'horizontal',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      disabledClass: 'front-intro__swipe--disabled',
    },
  })
  */
/*
  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
*/

  var appendNumber = 600;
  var prependNumber = 1;
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 40,
    pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    virtual: {
      slides: (function () {
        var slides = [];
        for (var i = 0; i < 600; i += 1) {
          slides.push('Slide ' + (i + 1));
        }
        return slides;
      }()),
    },
  });
  document.querySelector('.slide-1').addEventListener('click', function (e) {
    e.preventDefault();
    swiper.slideTo(0, 0);
  });
  document.querySelector('.slide-250').addEventListener('click', function (e) {
    e.preventDefault();
    swiper.slideTo(249, 0);
  });
  document.querySelector('.slide-500').addEventListener('click', function (e) {
    e.preventDefault();
    swiper.slideTo(499, 0);
  });
  document.querySelector('.prepend-2-slides').addEventListener('click', function (e) {
    e.preventDefault();
    swiper.virtual.prependSlide([
      'Slide ' + (--prependNumber),
      'Slide ' + (--prependNumber)
    ]);
  });
  document.querySelector('.append-slide').addEventListener('click', function (e) {
    e.preventDefault();
    swiper.virtual.appendSlide('Slide ' + (++appendNumber));
  });
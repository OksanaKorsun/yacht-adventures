const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 16,
  slidesPerGroup: 1,

  pagination: {
    el: '.swiper-pagination',
    clickable: true, // что-бы сделать пагинацию кликабельной
    },
  breakpoints: {
      375: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
});

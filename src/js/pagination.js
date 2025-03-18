const paginationSwiper = new Swiper('.swiper-pagination-section', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 16,
  slidesPerGroup: 1,

  pagination: {
    el: '.swiper-pagination',
    clickable: true, 
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

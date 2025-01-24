// const swiper = new Swiper('.swiper', {
//   direction: 'horizontal',
//   loop: true,
//   slidesPerView: 'auto',
//   spaceBetween: 18,
//   slidesPerGroup: 1,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

const swiper = new Swiper('.swiper', {
      slidesPerView: 3, 
      spaceBetween: 16, 
      loop: true, 
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        1280: {
          slidesPerView: 3, 
          spaceBetween: 16, 
        },
        768: {
          slidesPerView: 2, 
          spaceBetween: 16,
        },
        375: {
          slidesPerView: 1, 
          spaceBetween: 10,
        },
      },
    });
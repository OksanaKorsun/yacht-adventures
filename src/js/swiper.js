
// document.addEventListener("DOMContentLoaded", function () {
//     const swiper = new Swiper(".swiper", {
//     slidesPerView: 3, 
//     spaceBetween: 16,
//     direction: "horizontal",
//     loop: true,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//       375: {
//         slidesPerView: 1,
//         spaceBetween: 20,
//       },
//       768: {
//         slidesPerView: 2,
//         spaceBetween: 16,
//       },
//       1280: {
//           slidesPerView: 3,
//           spaceBetween: 16,
//       },
//     },
//   });
// });
window.onload = function() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 16,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // loop: true,
  });
};
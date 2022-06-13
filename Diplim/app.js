'use strict';
const swiperWrapper = document.querySelector('.swiper-wrapper');
for (let i = 1; i < 21; i++) {
    swiperWrapper.innerHTML += `<div class="swiper-slide">
                                    <img src="image/${i}.png">
                                </div>`;
}


var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
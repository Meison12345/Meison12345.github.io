'use strict';

const burger = document.querySelector('.hamburger-lines');
const mobileMenu = document.querySelector('.mobile-menu');
// const mobileWrapper = document.querySelector('.mobile-menu');
const body = document.body;
burger.addEventListener('click', function (e) {
    mobileMenu.classList.add('visible');
    body.classList.add('block-scroll');
});

mobileMenu.addEventListener('click', function (e) {
    body.classList.remove('block-scroll');
    mobileMenu.classList.remove('visible');
});

document.addEventListener('resize', function (e) {
    const size = window.innerWidth;
    if (size > 768) {
        console.log(size);
        body.classList.remove('block-scroll');
        mobileMenu.classList.remove('visible');
    }
});
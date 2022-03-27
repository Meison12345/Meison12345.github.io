'use strict';
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.header__left img');
    const sliderLine = document.querySelector('.slider-line');
    let count = 0;
    let width, height;

    function init() {
        console.log('resize');
        width = document.querySelector('.header__left').offsetWidth;
        // height = document.querySelector('.header__left').offsetHeight;
        sliderLine.style.width = width * images.length + 'px';
        images.forEach(item => {
            item.style.width = width + 'px';
            // item.style.height = height + 'px';
        });
        twistSlider();
    }

    init();
    window.addEventListener('resize', init);

    document.querySelector('.slider-next').addEventListener('click', function() {
        count++;
        if (count >= images.length) {
            count = 0;
        }
        twistSlider();
    });

    document.querySelector('.slider-previous').addEventListener('click', function() {
        count--;
        if (count < 0) {
            count = images.length - 1;
        }
        twistSlider();
    });

    function twistSlider() {
        sliderLine.style.transform = 'translate(-' + count * width + 'px)';
    }
});
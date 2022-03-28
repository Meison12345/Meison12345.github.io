'use strict';
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.header__left img');
    const sliderLine = document.querySelector('.slider-line');
    let sliderRight = document.querySelector('.slider-title-right');
    let sliderLeft = document.querySelector('.slider-title-left');
    let count = 0,
        subcount = 1;
    let width, height;

    function init() {
        // console.log('resize');
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
        // console.log(subcount);
        if (subcount >= images.length - 1) {
            sliderLeft.textContent = images[subcount - 1].dataset.name;
            subcount = 0;
            sliderRight.textContent = images[subcount].dataset.name;

        } else {
            sliderRight.textContent = images[subcount + 1].dataset.name;
            if (subcount === 0) {
                sliderLeft.textContent = images[images.length - 1].dataset.name;
            } else {
                sliderLeft.textContent = images[subcount - 1].dataset.name;
            }
            subcount++;
        }

        if (count >= images.length) {
            count = 0;
        }
        twistSlider();
    });

    document.querySelector('.slider-previous').addEventListener('click', function() {
        count--;
        subcount--;
        console.log(subcount);

        if (subcount === 0) {
            sliderLeft.textContent = images[images.length - 2].dataset.name;
            sliderRight.textContent = images[subcount].dataset.name;
        } else if (subcount < 0) {
            subcount = images.length - 1
            sliderLeft.textContent = images[subcount - 2].dataset.name;
            sliderRight.textContent = images[subcount].dataset.name;
            console.log(subcount);
        } else if (subcount === 1) {
            sliderLeft.textContent = images[images.length - 1].dataset.name;
            sliderRight.textContent = images[subcount].dataset.name;

        } else {
            sliderLeft.textContent = images[subcount - 2].dataset.name;
            sliderRight.textContent = images[subcount].dataset.name;
        }

        if (count < 0) {
            count = images.length - 1;
        }
        twistSlider();
    });

    function twistSlider() {
        sliderLine.style.transform = 'translate(-' + count * width + 'px)';
    }
});
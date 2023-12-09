'use strict';
document.addEventListener('DOMContentLoaded', function () {
    let slideIndex = 1;

    function showSlides(index) {
        const slides = document.querySelectorAll('.slide');
        const dotsContainer = document.getElementById('dots-container');

        if (index > slides.length) {
            slideIndex = 1;
        }

        if (index < 1) {
            slideIndex = slides.length;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }

        slides[slideIndex - 1].style.display = 'block';

        const dots = [];
        dotsContainer.innerHTML = '';
        for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.addEventListener('click', () => currentSlide(i + 1));
            dotsContainer.appendChild(dot);
            dots.push(dot);
        }

        dots[slideIndex - 1].classList.add('active');
    }

    function currentSlide(index) {
        showSlides(slideIndex = index);
    }

    showSlides(slideIndex);

    let startX = 0;
    let endX = 0;

    document.querySelector('.slider').addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    document.querySelector('.slider').addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        handleGesture();
    });

    function handleGesture() {
        if (endX - startX > 50) {
            showSlides(slideIndex -= 1);
        } else if (startX - endX > 50) {
            showSlides(slideIndex += 1);
        }
    }
});
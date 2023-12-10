'use strict';
document.addEventListener('DOMContentLoaded', function () {
    let slideIndex = 1;
    let timeSlide = 1000;

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

    // Автоматическое перелистывание слайдов каждую секунду
    setInterval(() => {
        showSlides(slideIndex += 1);
    }, timeSlide);
});
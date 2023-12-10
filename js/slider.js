document.addEventListener('DOMContentLoaded', function () {
    let slideIndex = 1;
    let timeSlide = 5000;
    let slideInterval = '';

    function showSlides(index) {
        const slides = document.querySelectorAll('.slide');
        const dotsContainer = document.getElementById('dots-container');

        if (index > slides.length) {
            slideIndex = 1;
        }

        if (index < 1) {
            slideIndex = slides.length;
        }

        const transformValue = `translateX(-${100 * (slideIndex - 1)}%)`;
        document.querySelector('.slider__container').style.transform = transformValue;

        const dots = [];
        dotsContainer.innerHTML = '';
        for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.addEventListener('click', () => {
                clearInterval(slideInterval);
                currentSlide(i + 1);
                slideInterval = setInterval(() => showSlides(slideIndex += 1), timeSlide);
            });
            dotsContainer.appendChild(dot);
            dots.push(dot);
        }

        dots[slideIndex - 1].classList.add('active');
    }

    function currentSlide(index) {
        showSlides(slideIndex = index);
    }

    showSlides(slideIndex);

    slideInterval = setInterval(() => {
        showSlides(slideIndex += 1);
    }, timeSlide);
});
'use strict';
document.addEventListener('DOMContentLoaded', function () {
    const resumeBtn = document.getElementById('resume');
    const applicationBtn = document.getElementById('application');
    const applicationPopup = document.querySelector('.application-popup');
    const resumePopup = document.querySelector('.resume-popup');


    applicationBtn.addEventListener('click', function(e){
        e.preventDefault();
        applicationPopup.classList.toggle('application-inactive')
    })


/**
 * @description Закрытие всех модальных окон при нажатии на ESC
 */
    document.addEventListener('keydown', function (el) {
        // let bodyActive = document.body.classList.contains('active');
        if (el.key === 'Escape') {
            closeModalWin();
        }
    });

/**
 * @description Функция закрытия всех модальных окон
 */
    function closeModalWin(){
        applicationPopup.classList.add('application-inactive')
    }
});
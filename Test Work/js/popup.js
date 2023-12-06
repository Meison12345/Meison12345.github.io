'use strict';
document.addEventListener('DOMContentLoaded', function () {
    const resumeBtn = document.getElementById('resume');
    const applicationBtn = document.getElementById('application');
    const applicationPopup = document.querySelector('.application-popup');
    const resumePopup = document.querySelector('.resume-popup');
    const submenuBtn = document.querySelector('.submenu-btn');
    const submenu = document.querySelector('.submenu');


    applicationBtn.addEventListener('click', function (e) {
        e.preventDefault();
        applicationPopup.classList.toggle('application-inactive');
        resumePopup.classList.add('application-inactive')
    })

    resumeBtn.addEventListener('click', function (e) {
        e.preventDefault();
        resumePopup.classList.toggle('application-inactive');
        applicationPopup.classList.toggle('application-inactive');
    })


    submenuBtn.addEventListener('click', function (e) {
        e.preventDefault();
        submenu.classList.toggle('application-inactive');
    });

    /**
     * @description Закрытие всех модальных окон при нажатии на ESC
     */
    document.addEventListener('keydown', function (el) {
        if (el.key === 'Escape') closeModalWin();
    });

    /**
     * @description Функция закрытия всех модальных окон
     */
    function closeModalWin() {
        applicationPopup.classList.add('application-inactive');
        resumePopup.classList.add('application-inactive');
        submenu.classList.add('application-inactive');
    }


    document.addEventListener('click', function (event) {
        if (!applicationPopup.contains(event.target) && event.target !== applicationBtn) {
            applicationPopup.classList.add('application-inactive');
        }

        if (!resumePopup.contains(event.target) && event.target !== resumeBtn) {
            resumePopup.classList.add('application-inactive');
        }

        if (!submenu.contains(event.target) && event.target !== submenuBtn) {
            submenu.classList.add('application-inactive');
        }
    });

});
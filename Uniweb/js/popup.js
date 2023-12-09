'use strict';
document.addEventListener('DOMContentLoaded', function () {
    const resumeBtn = document.getElementById('resume');
    const applicationBtn = document.getElementById('application');
    const applicationPopup = document.querySelector('.application-popup');
    const submenuItems = document.querySelectorAll('.submenu > li');
    const resumePopup = document.querySelector('.resume-popup');
    const submenuBtn = document.querySelector('.submenu-btn');
    const submenu = document.querySelector('.submenu');



    // Отмена всплытия события click
    submenuItems.forEach(item => {
        item.addEventListener('click', function (event) {
            event.stopPropagation();
        });
    });

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










const defaultOption = document.querySelector(".default_option");
const selectUlItems = document.querySelectorAll(".select_ul li");

defaultOption.addEventListener("click", function() {
  this.parentElement.classList.toggle("active");
});

selectUlItems.forEach(function(item) {
  item.addEventListener("click", function() {
    const currentElement = this.innerHTML;
    document.querySelector(".default_option li").innerHTML = currentElement;
    this.closest(".select_wrap").classList.remove("active");
  });
});

});
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

const defaultOptionResume = document.querySelector(".default_option_resume");
const selectUlResume = document.querySelectorAll(".select_ul_resume li");

const defaultOptionWork = document.querySelector(".default_option_work");
const selectUlWork = document.querySelectorAll(".select_ul_work li");


const defaultOptionTime = document.querySelector(".default_option_time");
const selectUlTime = document.querySelectorAll(".select_ul_time li");




defaultOptionTime.addEventListener("click", function() {
    this.parentElement.classList.toggle("active");
  });
  
  selectUlTime.forEach(function(item) {
    item.addEventListener("click", function() {
      const currentElement = this.innerHTML;
      document.querySelector(".default_option_time li").innerHTML = currentElement;
      this.closest(".select_wrap_time").classList.remove("active");
    });
  });



defaultOptionWork.addEventListener("click", function() {
    this.parentElement.classList.toggle("active");
  });
  
  selectUlWork.forEach(function(item) {
    item.addEventListener("click", function() {
      const currentElement = this.innerHTML;
      document.querySelector(".default_option_work li").innerHTML = currentElement;
      this.closest(".select_wrap_work").classList.remove("active");
    });
  });



defaultOptionResume.addEventListener("click", function() {
    this.parentElement.classList.toggle("active");
  });
  
  selectUlResume.forEach(function(item) {
    item.addEventListener("click", function() {
      const currentElement = this.innerHTML;
      document.querySelector(".default_option_resume li").innerHTML = currentElement;
      this.closest(".select_wrap_resume").classList.remove("active");
    });
  });



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
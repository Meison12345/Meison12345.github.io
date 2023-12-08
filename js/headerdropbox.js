'use strict';
document.addEventListener('DOMContentLoaded', function () {

    // const defaultOptionResume = document.querySelector(".default_option_resume");
    // const selectUlResume = document.querySelectorAll(".select_ul_resume li");

    // const defaultOptionWork = document.querySelector(".default_option_work");
    // const selectUlWork = document.querySelectorAll(".select_ul_work li");


    // const defaultOptionTime = document.querySelector(".default_option_time");
    // const selectUlTime = document.querySelectorAll(".select_ul_time li");




    // defaultOptionTime.addEventListener("click", function () {
    //     this.parentElement.classList.toggle("active");
    // });

    // selectUlTime.forEach(function (item) {
    //     item.addEventListener("click", function () {
    //         const currentElement = this.innerHTML;
    //         document.querySelector(".default_option_time li").innerHTML = currentElement;
    //         this.closest(".select_wrap_time").classList.remove("active");
    //     });
    // });



    // defaultOptionWork.addEventListener("click", function () {
    //     this.parentElement.classList.toggle("active");
    // });

    // selectUlWork.forEach(function (item) {
    //     item.addEventListener("click", function () {
    //         const currentElement = this.innerHTML;
    //         document.querySelector(".default_option_work li").innerHTML = currentElement;
    //         this.closest(".select_wrap_work").classList.remove("active");
    //     });
    // });



    // defaultOptionResume.addEventListener("click", function () {
    //     this.parentElement.classList.toggle("active");
    // });

    // selectUlResume.forEach(function (item) {
    //     item.addEventListener("click", function () {
    //         const currentElement = this.innerHTML;
    //         document.querySelector(".default_option_resume li").innerHTML = currentElement;
    //         this.closest(".select_wrap_resume").classList.remove("active");
    //     });
    // });




    function setupSelect(defaultOptionSelector, selectUlSelector, wrapSelector) {
        const defaultOption = document.querySelector(defaultOptionSelector);
        const selectUl = document.querySelectorAll(selectUlSelector);
    
        defaultOption.addEventListener("click", function () {
            this.parentElement.classList.toggle("active");
        });
    
        selectUl.forEach(function (item) {
            item.addEventListener("click", function () {
                const currentElement = this.innerHTML;
                defaultOption.querySelector("li").innerHTML = currentElement;
                const wrap = this.closest(wrapSelector);
                if (wrap) {
                    wrap.classList.remove("active");
                }
            });
        });
    }
    
    setupSelect(".default_option_resume", ".select_ul_resume li", ".select_wrap_resume");
    setupSelect(".default_option_work", ".select_ul_work li", ".select_wrap_work");
    setupSelect(".default_option_time", ".select_ul_time li", ".select_wrap_time");
    



    //Получение данных из инпутов в header
    document.getElementById('btn-application').addEventListener('click', function (e) {
        e.preventDefault();
        const FIO = document.querySelector('.application-FIO').value;
        const number = document.querySelector('.application-phone').value;
        const workName = document.querySelector('.application-work').textContent.trim();
        const workTime = document.querySelector('.application-workTime').textContent.trim();;
        const text = document.querySelector('.application-custom-textarea').value.trim();

        console.log(FIO, number, workName, workTime, text);

    })

    document.getElementById('btn-resume').addEventListener('click', function (e) {
        e.preventDefault();
        const FIO = document.querySelector('.resume-FIO').value;
        const number = document.querySelector('.resume-phone').value;
        const workName = document.querySelector('.resume-work').textContent.trim();
        const workTime = document.querySelector('.resume-education').value.trim()
        const text = document.querySelector('.resume-custom-textarea').value.trim();

        console.log(FIO, number, workName, workTime, text);

    })
});


// function setupDropdown(defaultOptionSelector, selectUlSelector) {
//     const defaultOption = document.querySelector(defaultOptionSelector);
//     const selectUlItems = document.querySelectorAll(selectUlSelector + ' li');

//     defaultOption.addEventListener("click", function () {
//       this.parentElement.classList.toggle("active");
//     });

//     selectUlItems.forEach(function (item) {
//       item.addEventListener("click", function () {
//         const currentElement = this.innerHTML;
//         document.querySelector(defaultOptionSelector + ' li').innerHTML = currentElement;
//         this.closest(selectUlSelector + ' li').classList.remove("active");
//       });
//     });
//   }

//   setupDropdown(".default_option_resume", ".select_ul_resume");
//   setupDropdown(".default_option_work", ".select_ul_work");
//   setupDropdown(".default_option_time", ".select_ul_time");
"use strict";
let btn_subs = document.querySelector(".subscribe__a");
let inp_email = document.querySelector(".subscribe__email");
let servResponse = document.querySelector(".form__active");
btn_subs.addEventListener("click", function(e) {
    e.preventDefault();
    if (
        inp_email.value.trim().length > 5 &&
        inp_email.value.trim().includes("@") &&
        inp_email.value.trim().includes(".")
    ) {
        // let userInput = document.forms.ourForm.ourForm__inp.value;
        // userInput = encodeURIComponent(userInput);
        // inp_email.classList.add("inp_anim");
        // inp_email.insertAdjacentHTML('afterbegin', inp_email.value)
        // inp_email.disabled = true;
        document.querySelector(".form__active").classList.add("form-active");
        document.querySelector(".subscribe__form").classList.add("no-active");
        // this.disabled = true;
        //AJAX
        // let servResponse = document.querySelector('.form__active')
        let userInput = document.forms.form.email.value;
        userInput = encodeURIComponent(userInput);

        let xhr = new XMLHttpRequest();

        xhr.open("POST", "form.php");

        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                servResponse.textContent = xhr.responseText;
            }
        };

        xhr.send("email" + userInput);
    }
});

let burger = document.querySelector(".burger");
let nav_ul = document.querySelector(".nav_ul");
burger.addEventListener("click", function() {
    this.classList.toggle("burger-active");
    nav_ul.classList.toggle("nav_ul-active");
    document.body.classList.toggle('body-active')
});
"use strict";
document.addEventListener("DOMContentLoaded", function() {
    let burger = document.querySelector(".burger");
    let nav_ul = document.querySelector(".nav_ul");
    const windowInnerWidth = window.innerWidth;

    burger.addEventListener("click", function() {
        this.classList.toggle("open");
        nav_ul.classList.toggle("nav_ul-active");
        document.body.classList.toggle("body-active");

    });

    let form__submit = document.querySelector(".connection__a");
    let inp__name = document.querySelector(".connection__input-name");
    let inp__email = document.querySelector(".connection__input-email");
    form__submit.addEventListener("click", (e) => {
        e.preventDefault();
        if (
            inp__name.value.trim().length > 3 &&
            inp__email.value.trim().length > 5 &&
            inp__email.value.trim().includes("@") &&
            inp__email.value.trim().includes(".")
        ) {
            console.log("Спасибо, мы свяжемся с вами!");
        }
    });

    let btn_subs = document.querySelector(".subscribe__a");
    let inp_email = document.querySelector(".subscribe__email");
    let servResponse = document.querySelector(".form__active");
    if (btn_subs !== null) {
        btn_subs.addEventListener("click", function(e) {
            e.preventDefault();
            if (
                inp_email.value.trim().length > 5 &&
                inp_email.value.trim().includes("@") &&
                inp_email.value.trim().includes(".")
            ) {
                document.querySelector(".form__active").classList.add("form-active");
                document.querySelector(".subscribe__form").classList.add("no-active");
                let userInput = document.forms.form.email.value;
                userInput = encodeURIComponent(userInput);

                let xhr = new XMLHttpRequest();

                xhr.open("POST", "form.php");

                xhr.setRequestHeader(
                    "Content-Type",
                    "application/x-www-form-urlencoded"
                );

                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        servResponse.textContent = xhr.responseText;
                    }
                };

                xhr.send("email" + userInput);
            } else {
                console.log("Введите корректный email");
            }
        });
    }
});
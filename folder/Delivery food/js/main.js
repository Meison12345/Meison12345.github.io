"use strict";
document.addEventListener("DOMContentLoaded", function() {
    let app = new Vue({
        el: ".main",
        data: {
            showMain: true,
            showRest: false,
            price: null,
        },

        methods: {
            goToMain() {
                this.showRest = false;
                this.showMain = true;
            },
            goToRest() {
                this.showRest = true;
                this.showMain = false;
            },
        },
        computed: {},
    });

    // let price_calc = document.querySelectorAll(".restaran-desc-bott__cart");
    // console.log(price_calc);
    // price_calc.forEach((element) => {
    //   element.addEventListener("click", function () {
    //     this.style.display = "none";

    //     let itog = document.querySelector(".header__button-price");
    //     console.log(itog);
    //   });
    // });

    let price_sum = document.querySelector(".header__button-price");
    let price_btn = document.querySelector(".header__button-cart");

    price_btn.addEventListener("click", function() {
        price_sum.classList.toggle("active");
    });

    let sign_in = document.querySelector(".header__button-sign");
    let sign_in_menu = document.querySelector(".form");
    let body = document.querySelector("body");
    let form_wrapper = document.querySelector(".form-wrapper");
    sign_in.addEventListener("click", function() {
        sign_in_menu.classList.toggle("active__form");
        body.classList.toggle("active__form-body");
        form_wrapper.classList.toggle("form-wrapper-active");
    });

    let email = document.querySelector(".form__email");
    let password = document.querySelector(".form__password");
    let form__link = document.querySelector(".form__link");
    let anim = document.querySelector("#circularG");
    form__link.addEventListener("click", function() {
        if (email.value == "") {
            setTimeout(() => {
                email.style.background = "white";
            }, 1000);
            email.style.background = "rgb(224 43 44)";
        }

        if (password.value == "") {
            setTimeout(() => {
                password.style.background = "white";
            }, 1000);
            password.style.background = "rgb(224 43 44)";
        }

        if (email.value !== "" && password.value !== "") {
            sign_in_menu.classList.toggle("active__form");
            setTimeout(() => {
                anim.classList.toggle("anim_active");

                form_wrapper.classList.toggle("form-wrapper-active");
                body.classList.toggle("active__form-body");
            }, 2000);

            anim.classList.toggle("anim_active");
        }
    });

    let span = document.querySelector(".form__span");
    console.log(span);
    span.addEventListener("click", function() {
        form_wrapper.classList.toggle("form-wrapper-active");
        body.classList.toggle("active__form-body");
        sign_in_menu.classList.toggle("active__form");
    });

    //sort goods

    // document.querySelector(".sort").onclick = mySort;
    // document.querySelector(".sort").addEventListener("click", mySort);
    // function mySort() {
    //   let nav = document.querySelector(".menu-list");
    //   console.log(nav);
    //   for (let i = 0; i < nav.children.length; i++) {
    //     for (let j = i; j < nav.children.length; j++) {
    //       if (
    //         +nav.children[i].getAttribute("data-price") >
    //         +nav.children[j].getAttribute("data-price")
    //       ) {
    //         replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
    //         insertAfter(replacedNode, nav.children[i]);
    //       }
    //     }
    //   }
    // }

    // function insertAfter(elem, refElem) {
    //   return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
    // }

    //BACKET
    let cart = {};

    //Увеличение количества товара
    document.onclick = (event) => {
        if (event.target.classList.contains("plus")) {
            plusFunction(event.target.dataset.id);
        }
    };
    //Уменьшение количества товара
    document.onclick = (event) => {
        if (event.target.classList.contains("plus")) {
            plusFunction(event.target.dataset.id);
        }
    };
    //Удаление товара
});
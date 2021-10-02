"use strict";
document.addEventListener("DOMContentLoaded", function() {
    /**@description Конструктор для сущности 'продукт' 
     * @param {string} name - Название товара
     * @param {number} price - Цена товара
     * @returns {string} возвращает HTML разметку
     */
    class Product {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
        renderProduct = () => {
            return `<div class="product__clock_">
        <a href="#" class="product__link">
            <img src="img/clock.png" alt="product" class="product__clock">
            <p>${this.name}</p>
            <p>${this.price} руб.</p>
        </a>
    </div>`;
        };
    }

    const clock1 = new Product("Louis XVII ATHOS", 89000);
    const clock2 = new Product("Louis XII ALHOS", 100000);
    const clock3 = new Product("Louis XX ARTOS", 50000);
    const clock4 = new Product("Louis XXI ATLOS", 149000);
    const clock5 = new Product("Louis XV ATHALAS", 92000);
    const clock6 = new Product("Louis X ATRES", 25000);
    const clock7 = new Product("Louis XXV GREHOS", 36099);
    const clock8 = new Product("Louis XII NEAOS", 59999);
    const mas = [clock1, clock2, clock3, clock4, clock5, clock6, clock7, clock8];

    let prodContent = document.querySelector(".product__content");
    mas.forEach((el) => {
        prodContent.insertAdjacentHTML("afterbegin", el.renderProduct());
    });

    function createEl() {
        let block = document.querySelector('.prefooter__form')
        let el = document.createElement('p');
        block.insertAdjacentHTML('beforeend', el.innerHTML = 'Благодарим вас!');
    }

    const formEmail = document.querySelector('.prefooter__form-email');
    const formBtn = document.querySelector('.prefooter__form-link');
    formBtn.addEventListener("click", function(el) {
        el.preventDefault()
        if (formEmail.value.trim() !== '' && /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(formEmail.value.trim())) {
            console.log('Благодарим вас!');
            //some function or AJAX
        }
    })



    const burger = document.querySelector(".burger");
    const nav_ul = document.querySelector(".nav_ul");
    const menu_burger = document.querySelector('.secondNav__burger');
    burger.addEventListener("click", function(element) {
        this.classList.toggle('open');
        document.body.classList.toggle('body_active');
        menu_burger.classList.toggle('secondNav__burger');
    })

});
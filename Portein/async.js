'use strict';
document.addEventListener('DOMContentLoaded', function() {
    //Async
    let list = document.querySelector(".list");
    /**
     * @description асинхронная функцияция получения данных с github и вставка этих данных в разметку
     */
    async function getResponse() {
        let response = await fetch(
            "https://raw.githubusercontent.com/Meison12345/JSON/Master/JSON"
        );
        let content = await response.json();
        for (let key in content) {
            list.innerHTML += `<div class="product__clock_">
                     <a href="#" class="product__link">
                         <img src="img/clock.png" alt="product" class="product__clock">
                            <p class="content__name">${content[key].name}</p>
                            <div class="product__clock-wrapper">
                            <p class="content__price">${content[key].price}<p>руб.</p>
                         </div>
                     </a>
                     </div>`;
        }
    }
    getResponse();

})
"use strict";
window.addEventListener("load", function() {
    setTimeout(function() {
        let products = document.querySelectorAll(".product__clock_");
        let fromInput = document.querySelector("#from");
        fromInput.addEventListener("change", changedPriceHandler);

        let toInput = document.querySelector("#to");
        toInput.addEventListener("change", changedPriceHandler);

        /** Обработчик события на изменение полей ввода*/
        function changedPriceHandler() {
            const fromPrice = fromInput.value;
            const toPrice = toInput.value;
            if (fromPrice === "" && toPrice === "") {
                reset();
            } else if (fromPrice !== "" && toPrice === "") {
                showProductsWithFromPrice();
            } else if (fromPrice === "" && toPrice !== "") {
                showProductsWithToPrice();
            } else if (fromPrice !== "" && toPrice !== "") {
                showProductsWithBothPrice();
            }
        }
        /**Показываем все скрытые элементы */
        function reset() {
            products.forEach(function(product) {
                if (isProductHidden(product)) {
                    showProduct(product);
                }
            });
        }

        function showProductsWithFromPrice() {
            const fromPrce = Number(fromInput.value);
            products.forEach(function(product) {
                const productPrice = Number(
                    product.querySelector('.content__price').textContent.trim()
                );
                if (productPrice < fromPrce) {
                    hideProduct(product);
                } else {
                    showProduct(product);
                }
            });
        }

        function showProductsWithToPrice() {
            const toPrce = Number(toInput.value);
            products.forEach(function(product) {
                const productPrice = Number(
                    product.querySelector('.content__price').textContent.trim()
                );
                if (productPrice > toPrce) {
                    hideProduct(product);
                } else {
                    showProduct(product);
                }
            });
        }

        function showProductsWithBothPrice() {
            const fromPrice = Number(fromInput.value);
            const toPrice = Number(toInput.value);
            if (fromPrice > toPrice) {
                alert("Цена ОТ не может быть выше цены ДО.");
                return;
            }
            products.forEach(function(product) {
                const productPrice = Number(
                    product.querySelector('.content__price').textContent.trim()
                );
                if (productPrice >= fromPrice && productPrice <= toPrice) {
                    showProduct(product);
                } else {
                    hideProduct(product);
                }
            });
        }

        function hideProduct(product) {
            product.style.display = "none";
        }

        function showProduct(product) {
            product.style.display = "block";
        }

        function isProductHidden(product) {
            return (product.style.display = "none");
        }
    }, 500);
});
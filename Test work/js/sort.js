'use strict';
document.addEventListener('DOMContentLoaded', function() {
    let replacedNode;
    let data = document.querySelector('.plants__drop-menu');
    data.addEventListener('change', function() {
        setGoodsSort();
        if (data.children[0].selected == true) {
            goodsSortCheap();
        }
        if (data.children[1].selected == true) {
            goodsSortExpres();
        }
    });

    /**
     *@description Запуск анимации при сортировки товаров
     */
    function setGoodsSort() {
        document.querySelectorAll('.plants__element').forEach(function(el) {
            el.classList.add('plants__element-animated');
        })
    }

    /**
     * @description Выведет сначала дешевые товары
     */
    function goodsSortCheap() {
        let nav = document.querySelector('.plants-shop');
        for (let i = 0; i < nav.children.length; i++) {
            for (let j = i; j < nav.children.length; j++) {
                if (+nav.children[i].getAttribute('data-price') > +nav.children[j].getAttribute('data-price')) {
                    replacedNode = nav.replaceChild(nav.children[i], nav.children[j]);
                    insertAfter(replacedNode, nav.children[i]);
                }
            }
        }

    }
    /**
     * @description Выведет сначала дорогие товары
     */
    function goodsSortExpres() {
        let nav = document.querySelector('.plants-shop');
        for (let i = 0; i < nav.children.length; i++) {
            for (let j = i; j < nav.children.length; j++) {
                if (+nav.children[i].getAttribute('data-price') < +nav.children[j].getAttribute('data-price')) {
                    replacedNode = nav.replaceChild(nav.children[i], nav.children[j]);
                    insertAfter(replacedNode, nav.children[i]);
                }
            }
        }
    }
    /**
     *@description возвращение эл-тов
     */
    function insertAfter(elem, refElem) {
        return refElem.parentNode.insertBefore(elem, refElem);
    }
});
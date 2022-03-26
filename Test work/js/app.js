'use strict';

document.addEventListener('DOMContentLoaded', function() {
    //Модальное окно
    const modalWin = document.querySelector('.modal-win');
    //Крестик
    const closeWinBtn = document.querySelector('.modal-win-btn-close');
    //Кнопка отменить
    const cancelWinBtn = document.querySelector('.modal-win-cancel');

    // При нажатии на кнопку формы, открывается модальное окно
    function closeModalWin() {
        modalWin.classList.toggle('modal-win-check');
    }

    // Функция проверки формы
    function checkForm() {
        let name = document.querySelector('.modal-win-name').value.trim();
        let number = document.querySelector('.modal-win-num').value.trim();

        console.log(name + ' ' + number);

        if (name.length > 3) {
            console.log('Name');
            getData();


        }

    }

    // Асинхронная функция получиния данных с url
    async function getData(url = 'https://jsonplaceholder.typicode.com/todos') {
        let data = await fetch(url);
        data = await data.json();
        console.log(data);
    }

    document.querySelector('.nav__btn').addEventListener('click', closeModalWin)
        // При нажатии на крестик, закрывается модальное окно
    closeWinBtn.addEventListener('click', closeModalWin)
        //При нажатии на отменить, закрывается модальное окно
    cancelWinBtn.addEventListener('click', closeModalWin)



    document.querySelector('.modal-win-submit').addEventListener('click', checkForm);

});
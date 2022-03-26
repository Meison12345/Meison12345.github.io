'use strict';
document.addEventListener('DOMContentLoaded', function() {
    //Модальное окно
    const modalWin = document.querySelector('.modal-win');
    //Крестик
    const closeWinBtn = document.querySelector('.modal-win-btn-close');
    //Кнопка отменить
    const cancelWinBtn = document.querySelector('.modal-win-cancel');
    //Ссылка на body
    const body = document.body;
    const regNum = /^[\+\7|8]\d{10}/;
    const regName = /[A-Za-zА-Яа-яЁё]/;
    const spanValid = document.querySelector('.checkValid');
    const spin = document.querySelector('.spin-wrapper');

    // При нажатии на кнопку формы, открывается модальное окно
    function closeModalWin() {
        modalWin.classList.toggle('modal-win-check');
        body.classList.toggle('active');
    }

    document.querySelector('.nav__btn').addEventListener('click', closeModalWin)
    closeWinBtn.addEventListener('click', closeModalWin)
    cancelWinBtn.addEventListener('click', closeModalWin)

    // Функция проверки формы
    function validate(regex, inp) {
        return regex.test(inp);
    }
    //Если не корректно
    function notValid(inp, el, mess) {
        inp.classList.add('is-invalid');
        el.innerHTML = mess;
    }
    //Если корректно
    function valid(inp, el, mess) {
        inp.classList.remove('is-invalid');
        inp.classList.add('is-invalid');
        el.innerHTML = mess;
    }

    //Выводит ошибку, несли статут fetch не 200
    function showErrorMess() {
        spanValid.innerHTML = "Что-то пошло не так"
    }

    function cleadrModalWin() {
        document.querySelector('.modal-win-form').classList.add('modalDaective')
        document.querySelector('.modal-win-text').classList.add('modalDaective')
    }

    //Выводит элементы массива
    function showData(array, userId = 5, completed = false) {
        array = JSON.parse(array);
        // let out = `<table class='table'>`;
        // out += `<tr><td>UserId</td>`;
        // out += `<td>id</td>`;
        // out += `<td>title</td>`;
        // out += `<td>completed</td></tr>`;

        let out = `<table class='table' cellspacing='10px'><thead>
                        <tr><td>UserId</td>
                        <td>id</td>
                        <td>title</td>
                        <td>completed</td></thead></tr><tbody>`;

        for (let key in array) {
            if (array[key]['userId'] == 5 && array[key]['completed'] == false) {
                out += `<tr><td>${array[key]['userId']}</td>`;
                out += `<td>${array[key]['id']}</td>`;
                out += `<td>${array[key]['title']}</td>`;
                out += `<td>${array[key]['completed']}</td></tr>`;
                console.log(array[key]['userId']);
            }
        }
        out += '</tbody></table>';
        document.querySelector('.table').innerHTML = out;

    }
    //Асинхронная функция получиния данных с url
    async function getData(url = 'https://jsonplaceholder.typicode.com/todos') {
        let data = await fetch(url)
            .then(function(res) {
                spin.classList.toggle('spin-wrapper-active');
                console.log(res.status);
                if (res.status != 200) {
                    showErrorMess();
                } else {
                    return res.text();
                }
            }).then(function(body) {
                spin.classList.toggle('spin-wrapper-active');
                showData(body)
                return JSON.parse(body);
            });

        // data = await data.json();
        // console.log(data);
    }

    document.querySelector('.modal-win-submit').addEventListener('click', function(el) {
        el.preventDefault();
        let number = document.querySelector('.modal-win-num').value.trim();
        let name = document.querySelector('.modal-win-name').value.trim();


        if (name.length > 3 && validate(regName, name) && validate(regNum, number)) {
            valid(spanValid, spanValid, 'Все верно');
            console.log('Valid');
            cleadrModalWin();
            getData();
        } else {
            notValid(spanValid, spanValid, 'Проверка не пройдена');
            console.log('Not valid');
        }
    });
});
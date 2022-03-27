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
    const regNum = /^(8|\+7)[\d\(\)\ -]{9}\d$/gm;
    const regName = /[A-Za-zА-Яа-яЁё]/;
    const spanValid = document.querySelector('.checkValid');
    const showErrorContainer = document.querySelector('.showError');
    const spin = document.querySelector('.spin-wrapper');

    // При нажатии на кнопку формы, открывается модальное окно
    function closeModalWin() {
        modalWin.classList.toggle('modal-win-check');
        body.classList.toggle('active');
        setBlur();
    }

    document.querySelector('.nav__btn').addEventListener('click', closeModalWin)
    closeWinBtn.addEventListener('click', closeModalWin)
    cancelWinBtn.addEventListener('click', closeModalWin)

    function setBlur() {
        document.querySelector('.body-wrapper').classList.toggle('body-wrapper-filter');
    }

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

    //Выводит ошибку, если статуc не 200
    function showErrorMess() {
        spin.classList.toggle('spin-wrapper-active');
        showErrorContainer.innerHTML = "Что-то пошло не так<br>Попробуйте ещё раз";
    }

    function cleadrModalWin() {
        document.querySelector('.modal-win-form').classList.add('modalDaective')
        document.querySelector('.modal-win-text').classList.add('modalDaective')
    }

    //Выводит элементы массива
    function showData(array, userId = 5, completed = false) {
        array = JSON.parse(array);
        let out = `<table class='table' cellspacing='10px'><thead>
                        <tr><td><strong>UserId</strong></td>
                        <td><strong>id</strong></td>
                        <td><strong>title</strong></td>
                        <td><strong>completed</strong></td></thead></tr><tbody>`;

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
        document.querySelector('.table-wrapper').innerHTML = out;

    }
    //Асинхронная функция получения данных с url
    async function getData(url = 'https://jsonplaceholder.typicode.com/todos') {
        spin.classList.toggle('spin-wrapper-active');
        await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'API-Key': 'secret'
                }
            })
            .then(function(res) {
                spin.classList.toggle('spin-wrapper-active');
                console.log(res.status);
                if (res.status != 200 || res.ok == false) {
                    spin.classList.toggle('spin-wrapper-active');
                    console.log('error');
                    showErrorMess();
                } else {
                    console.log(res);
                    return res.text();
                }
            }).then(function(body) {
                spin.classList.toggle('spin-wrapper-active'); //не забыть вкл, если ничего не поменяется
                showData(body);
                spin.classList.toggle('spin-wrapper-active');
                return JSON.parse(body);
            }).catch(function() {
                console.log('error');
                showErrorMess();
            });
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
            notValid(spanValid, spanValid, 'Проверка не пройдена. Попробуйте ещё раз');
            console.log('Not valid');
        }
    });

    document.querySelector('.modal-win-wrapper').addEventListener('click', function(el) {
        el.stopPropagation();
    });




    //Данные будут сохраняться в форме, если перезайти на страницу.
    // cancelWinBtn.addEventListener('click', function() {
    //     let number = document.querySelector('.modal-win-num').value.trim();
    //     let name = document.querySelector('.modal-win-name').value.trim();
    //     setDataLoaclStor(name, number);

    // });

    // function setDataLoaclStor(name, number) {
    //     localStorage.setItem('name', name);
    //     localStorage.setItem('number', number);
    // }

    // function getDataLoaclStor() {

    // }



});
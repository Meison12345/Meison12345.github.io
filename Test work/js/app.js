'use strict';
document.addEventListener('DOMContentLoaded', function() {
    const modalWin = document.querySelector('.modal-win');
    const closeWinBtn = document.querySelector('.modal-win-btn-close');
    const cancelWinBtn = document.querySelector('.modal-win-cancel');
    const body = document.body;
    const regNum = /^(8|\+7)[\d\(\)\ -]{9}\d$/gm;
    const regName = /[A-Za-zА-Яа-яЁё]{4,}/gm;
    const spanValid = document.querySelector('.checkValid');
    const showErrorContainer = document.querySelector('.showError');
    const spin = document.querySelector('.spin-wrapper');
    /** 
     * @description Функция закрытия модального окна
     */
    function closeModalWin(el) {
        document.querySelector('.modal-win-wrapper').classList.toggle('modal-win-wrapper-active');
        modalWin.classList.toggle('modal-win-check');
        body.classList.toggle('active');
        setBlur();
        // modalWin.classList.toggle('modal-win-hide');

    }

    document.querySelector('.nav__btn').addEventListener('click', closeModalWin);
    closeWinBtn.addEventListener('click', closeModalWin);
    cancelWinBtn.addEventListener('click', closeModalWin);

    /** Функция установки блюра при открытом модальном окне*/
    function setBlur() {
        document.querySelector('.body-wrapper').classList.toggle('body-wrapper-filter');
    }

    /**
     * @description Проверка регулярными выражениями входных данных
     * @param regex - регулярное выражение
     * @param inp Входные данные 
     */
    function validate(regex, inp) {
        return regex.test(inp);
    }
    /**
     * @description Если проверка не прошла, вывод сообщения об ошибке
     * @param inp Входные данные 
     * @param el Точка вывода
     * @param mess Выводимое сообщение
     */
    function notValid(inp, el, mess) {
        inp.classList.add('is-invalid');
        el.innerHTML = mess;
    }
    /**
     * @description Если проверка прошла
     * @param inp Входные данные  
     * @param el Точка вывода
     * @param mess Выводимое сообщение
     */
    function valid(inp, el, mess) {
        inp.classList.remove('is-invalid');
        inp.classList.add('is-invalid');
        el.innerHTML = mess;
    }

    /**
     * @description Вывод ошибки
     * */
    function showErrorMess() {
        spin.classList.toggle('spin-wrapper-active');
        showErrorContainer.innerHTML = "Что-то пошло не так<br>Попробуйте ещё раз";
    }
    /**
     * @description Очистка модального окна
     * */
    function clearModalWin() {
        document.querySelector('.modal-win-form').classList.add('modalDaective')
        document.querySelector('.modal-win-text').classList.add('modalDaective')
    }

    /**
     * @description Вывод полученных значений
     */
    function showData(array) {
        array = JSON.parse(array);
        let out = `<table class='table'><thead>
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

    /**
     * @description Получение данных
     * @param {string} url - ссылка
     */
    function getData(url = 'https://jsonplaceholder.typicode.com/todos') {
        spin.classList.toggle('spin-wrapper-active');
        fetch(url, {
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


        if (validate(regName, name) && validate(regNum, number)) {
            valid(spanValid, spanValid, 'Все верно');
            console.log('Valid');
            clearModalWin();
            getData();
        } else {
            notValid(spanValid, spanValid, 'Проверка не пройдена. Попробуйте ещё раз');
            console.log('Not valid');
        }
    });




    /**
     * @description Данные будут сохраняться в localStarage, если перезайти на страницу.
     */
    cancelWinBtn.addEventListener('click', function() {
        let number = document.querySelector('.modal-win-num').value.trim();
        let name = document.querySelector('.modal-win-name').value.trim();
        setDataLoaclStor(name, number);
    });

    /**
     * @description Сохраняем данные формы в localstaroge
     */
    function setDataLoaclStor(name, number) {
        localStorage.setItem('name', name);
        localStorage.setItem('number', number);
    }

    /**
     * @description Берём данные формы из localstaroge
     */
    function getDataLoaclStor() {
        document.querySelector('.modal-win-name').value = localStorage.getItem('name');
        document.querySelector('.modal-win-num').value = localStorage.getItem('number');
    }

    //Если открыто модальное окно, его можно закрыть через Esc
    document.addEventListener('keydown', function(el) {
        let bodyActive = document.body.classList.contains('active');
        if (el.key === 'Escape' && bodyActive) {
            closeModalWin();
        }
    });





});
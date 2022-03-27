'use strict';

document.addEventListener('DOMContentLoaded', function () {
  //Модальное окно
  var modalWin = document.querySelector('.modal-win'); //Крестик

  var closeWinBtn = document.querySelector('.modal-win-btn-close'); //Кнопка отменить

  var cancelWinBtn = document.querySelector('.modal-win-cancel'); //Ссылка на body

  var body = document.body;
  var regNum = /^(8|\+7)[\d\(\)\ -]{9}\d$/gm;
  var regName = /[A-Za-zА-Яа-яЁё]/;
  var spanValid = document.querySelector('.checkValid');
  var showErrorContainer = document.querySelector('.showError');
  var spin = document.querySelector('.spin-wrapper'); // При нажатии на кнопку формы, открывается модальное окно

  function closeModalWin() {
    modalWin.classList.toggle('modal-win-check');
    body.classList.toggle('active');
    setBlur();
  }

  document.querySelector('.nav__btn').addEventListener('click', closeModalWin);
  closeWinBtn.addEventListener('click', closeModalWin);
  cancelWinBtn.addEventListener('click', closeModalWin);

  function setBlur() {
    document.querySelector('.body-wrapper').classList.toggle('body-wrapper-filter');
  } // Функция проверки формы


  function validate(regex, inp) {
    return regex.test(inp);
  } //Если не корректно


  function notValid(inp, el, mess) {
    inp.classList.add('is-invalid');
    el.innerHTML = mess;
  } //Если корректно


  function valid(inp, el, mess) {
    inp.classList.remove('is-invalid');
    inp.classList.add('is-invalid');
    el.innerHTML = mess;
  } //Выводит ошибку, несли статут fetch не 200


  function showErrorMess() {
    showErrorContainer.innerHTML = "Что-то пошло не так<br>Попробуйте попозже ещё раз";
  }

  function cleadrModalWin() {
    document.querySelector('.modal-win-form').classList.add('modalDaective');
    document.querySelector('.modal-win-text').classList.add('modalDaective');
  } //Выводит элементы массива


  function showData(array) {
    var userId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
    var completed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    array = JSON.parse(array);
    var out = "<table class='table' cellspacing='10px'><thead>\n                        <tr><td><strong>UserId</strong></td>\n                        <td><strong>id</strong></td>\n                        <td><strong>title</strong></td>\n                        <td><strong>completed</strong></td></thead></tr><tbody>";

    for (var key in array) {
      if (array[key]['userId'] == 5 && array[key]['completed'] == false) {
        out += "<tr><td>".concat(array[key]['userId'], "</td>");
        out += "<td>".concat(array[key]['id'], "</td>");
        out += "<td>".concat(array[key]['title'], "</td>");
        out += "<td>".concat(array[key]['completed'], "</td></tr>");
        console.log(array[key]['userId']);
      }
    }

    out += '</tbody></table>';
    document.querySelector('.table-wrapper').innerHTML = out;
  } //Асинхронная функция получения данных с url


  function getData() {
    var url,
        _args = arguments;
    return regeneratorRuntime.async(function getData$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = _args.length > 0 && _args[0] !== undefined ? _args[0] : 'https://jsonplaceholder.typicode.com/todos';
            _context.next = 3;
            return regeneratorRuntime.awrap(fetch(url).then(function (res) {
              spin.classList.toggle('spin-wrapper-active');
              console.log(res.status);

              if (res.status != 200 || res.ok == false) {
                console.log('error');
                showErrorMess();
              } else {
                console.log(res);
                return res.text();
              }
            }).then(function (body) {
              spin.classList.toggle('spin-wrapper-active'); //не забыть вкл, если ничего не поменяется

              showData(body);
              return JSON.parse(body);
            })["catch"](function () {
              console.log('error');
              showErrorMess();
            }));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    });
  }

  document.querySelector('.modal-win-submit').addEventListener('click', function (el) {
    el.preventDefault();
    var number = document.querySelector('.modal-win-num').value.trim();
    var name = document.querySelector('.modal-win-name').value.trim();

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
  document.querySelector('.modal-win-wrapper').addEventListener('click', function (el) {
    el.stopPropagation();
  });
});
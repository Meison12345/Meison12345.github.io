'use strict';

document.addEventListener('DOMContentLoaded', function () {
  //Модальное окно
  var modalWin = document.querySelector('.modal-win'); //Крестик

  var closeWinBtn = document.querySelector('.modal-win-btn-close'); //Кнопка отменить

  var cancelWinBtn = document.querySelector('.modal-win-cancel'); // При нажатии на кнопку формы, открывается модальное окно

  function closeModalWin() {
    modalWin.classList.toggle('modal-win-check');
  }

  function checkForm() {
    var name = document.querySelector('.modal-win-name').value;
    var number = document.querySelector('.modal-win-num').value;
    console.log(name + ' ' + number);

    if (name.trim().length > 3) {
      console.log('Name');
      getData();
    }
  }

  function getData() {
    var url,
        data,
        _args = arguments;
    return regeneratorRuntime.async(function getData$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = _args.length > 0 && _args[0] !== undefined ? _args[0] : 'https://jsonplaceholder.typicode.com/todos';
            _context.next = 3;
            return regeneratorRuntime.awrap(fetch(url));

          case 3:
            data = _context.sent;
            _context.next = 6;
            return regeneratorRuntime.awrap(data.json());

          case 6:
            data = _context.sent;
            console.log(data);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    });
  }

  document.querySelector('.nav__btn').addEventListener('click', closeModalWin); // При нажатии на крестик, закрывается модальное окно

  closeWinBtn.addEventListener('click', closeModalWin); //При нажатии на отменить, закрывается модальное окно

  cancelWinBtn.addEventListener('click', closeModalWin);
  document.querySelector('.modal-win-submit').addEventListener('click', checkForm);
});
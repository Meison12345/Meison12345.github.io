- Создать небольшую **адаптивную** страницу (*Только компьютеры, без мобильных устройств*) с несколькими блоками по макету из Figma — [https://www.figma.com/file/SIRkcqtaKQoohnojXBXu7u/Plant-shop-(Copy)?node-id=0%3A1](https://www.figma.com/file/SIRkcqtaKQoohnojXBXu7u/Plant-shop-(Copy)?node-id=0%3A1)
- По нажатию на кнопку “Форма” должно открыться модальное окно с формой обратной связи
- Сделать простую валидацию формы (имя должно быть не менее 3-х символов, телефон должен начинаться с +7 или 8, за которыми следуют еще 10 цифр)
- При нажатии на “крестик” или на “отменить” модальное окно должно закрыться
- При нажатии на кнопку “отправить” должен отправиться GET запрос на данный адрес: [https://jsonplaceholder.typicode.com/todos](https://jsonplaceholder.typicode.com/todos) (модальное окно изменится на загрузочный спинер)
- Адрес вернет массив из 200 элементов. Необходимо заменить контент модального окна и отрисовать пришедшие данные в виде таблицы, который содержит в себе элементы только от пользователей с `userId = 5` и с `completed = false`.

- При входе на сайт, небольшая анимация - opacity 
- Анимирован слайдер, меняется контент на кнопках в зависимости от выбранной картинки(берётся из data атрибутов). 
- Анимированы карточки товара и их сортировка (выбор производится из выдающего списка) 
- Небольшой адаптив 
- Проверка регулрками полей ввода (имя, номер телефона). Есть функция, сохраняющая введенные данные в localStarage. Есть функция, которая вводит данные из localStorage, но она нигде не вызывается. 
- Загрузочный спинер. 
- При неправильно введённом имени и номера телефона, появляется сообщение об ошибке. 
- Если данные Get запросом не получены, выводится сообщение об ошибке 
- Полученные данные выводятся в виде таблицы 
- Присутствуют эффекты hover, focus, active
- Везде анимация
- Присутствует хорошая js документация
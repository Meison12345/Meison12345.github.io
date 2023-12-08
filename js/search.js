'use strict';
document.addEventListener('DOMContentLoaded', function () {
    const personnelData = JSON.parse('[{"name":"Лопухова Надежда Александровна","position":"Гувернантка","age":45,"experience":15},{"name":"Ермакова Надежда Ивановна","position":"Няня","age":30,"experience":5},{"name":"Филимонов Евгений Семенович","position":"Садовник","age":50,"experience":20},{"name":"Лопухова Надежда Александровна","position":"Уборщица","age":35,"experience":7},{"name":"Миронов Юрий Герасимович","position":"Конюх","age":60,"experience":15},{"name":"Новикова Нина Алексеевна","position":"Повар","age":55,"experience":30},{"name":"Лопухова Надежда Александровна","position":"Гувернантка","age":45,"experience":15},{"name":"Лопухова Надежда Александровна","position":"Гувернантка","age":45,"experience":15},{"name":"Лопухова Надежда Александровна","position":"Гувернантка","age":45,"experience":15}]');
    const tableBody = document.getElementById('resultBody');
    const parentElement = document.querySelector('.main__calc-mid');

    // Проверяем вводимые данные
    parentElement.addEventListener('input', function (event) {
        const target = event.target;
        if (target.classList.contains('range-inp')) {
            target.value = target.value.replace(/\D/g, '');
        }
    });


    // Заполняем таблицу данными о персонале. Имитация получения данных с сервера
    personnelData.forEach(person => {
        const row = tableBody.insertRow();
        const nameCell = row.insertCell();
        const positionCell = row.insertCell();
        const ageCell = row.insertCell();
        const experienceCell = row.insertCell();

        nameCell.textContent = person.name;
        positionCell.textContent = person.position;
        ageCell.textContent = person.age;
        experienceCell.textContent = person.experience + ' лет';
    });

    /**
     * @description получение входных данных, сравнение, подготовка подходящих данных в формате [{},]
     */
    function searchPersonnel() {
        const minAge = +(document.querySelector('.main__calc-mid').children[1].children[0].value);
        const maxAge = +(document.querySelector('.main__calc-mid').children[1].children[1].value);
        const minExperience = +(document.querySelector('.main__calc-mid').children[0].children[0].value);
        const maxExperience = +(document.querySelector('.main__calc-mid').children[0].children[1].value);
        
        if (minAge >= maxAge || minExperience >= maxExperience) showErrorMsg();

        const position = document.getElementById('recruit-worker').textContent.trim();

        const filteredData = personnelData.filter(person =>
            person.position === position &&
            person.experience >= minExperience && person.experience <= maxExperience &&
            person.age >= minAge && person.age <= maxAge
        );

        displayResults(filteredData);
    }

    /**
     * @description Вывод ошибки при неправильном вводе данных
     */
    function showErrorMsg() {
        console.log('Ошибка. От не может быть больше, чем до');
    }

    /**
     * @description Очистка таблицы перед обновлением и создание новых строк с данными
     * @param {[{},]} data массив объектов, которые подходят под входные данные
     */
    function displayResults(data) {
        tableBody.innerHTML = '';
        data.forEach(person => {
            const row = document.createElement('tr');
            const nameCell = document.createElement('td');
            nameCell.textContent = person.name;
            const positionCell = document.createElement('td');
            positionCell.textContent = person.position;
            const ageCell = document.createElement('td');
            ageCell.textContent = person.age;
            const experienceCell = document.createElement('td');
            experienceCell.textContent = person.experience + ' лет';

            row.appendChild(nameCell);
            row.appendChild(positionCell);
            row.appendChild(ageCell);
            row.appendChild(experienceCell);

            tableBody.appendChild(row);
        });
    }
    document.querySelector('.main__calc-right > button').addEventListener('click', searchPersonnel);
});
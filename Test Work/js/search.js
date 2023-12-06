'use strict';
document.addEventListener('DOMContentLoaded', function () {
    const personnelData = JSON.parse('[{"name":"Лопухова Надежда Александровна","position":"Гувернантка","age":45,"experience":15},{"name":"Ермакова Надежда Ивановна","position":"Няня","age":30,"experience":5},{"name":"Филимонов Евгений Семенович","position":"Садовник","age":50,"experience":20},{"name":"Лопухова Надежда Александровна","position":"Уборщица","age":35,"experience":7},{"name":"Миронов Юрий Герасимович","position":"Конюх","age":60,"experience":15},{"name":"Новикова Нина Алексеевна","position":"Повар","age":55,"experience":30},{"name":"Лопухова Надежда Александровна","position":"Гувернантка","age":45,"experience":15},{"name":"Лопухова Надежда Александровна","position":"Гувернантка","age":45,"experience":15},{"name":"Лопухова Надежда Александровна","position":"Гувернантка","age":45,"experience":15}]');
    const tableBody = document.getElementById('resultBody');

    // Заполняем таблицу данными о персонале
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

    function searchPersonnel() {
        const position = document.getElementById('recruit-worker').value;
        const minExperience = +(document.querySelector('.main__calc-mid').children[0].children[0].value);
        const maxExperience = +(document.querySelector('.main__calc-mid').children[0].children[1].value);
        const minAge = +(document.querySelector('.main__calc-mid').children[1].children[0].value);
        const maxAge = +(document.querySelector('.main__calc-mid').children[1].children[1].value);

        const filteredData = personnelData.filter(person =>
            person.position === position &&
            person.experience >= minExperience && person.experience <= maxExperience &&
            person.age >= minAge && person.age <= maxAge
        );

        displayResults(filteredData);
    }

    function displayResults(data) {


        // Очистка таблицы перед обновлением
        tableBody.innerHTML = '';

        // Создание новых строк с данными
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
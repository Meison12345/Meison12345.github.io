'use strict';
const title = 'Этот тест позволяет оценить Ваши общие знания в сфере компьютерной графики';
const subtitle = "Этот тест позволяет оценить Ваши общие знания в сфере компьютерной графики";
const questions = [{
        text: "Какие исходные данные нужны для построения окружности при помощи SVG?",
        answers: [
            "по координатам двух крайних точек диагонали",
            "по координатам центра и величиной радиуса",
            "по координатам трёх точек окружности",
        ],
        correctAnswer: 1 // нумерация ответов с нуля!
    },
    {
        text: "В каком формате хранится SVG?",
        answers: [
            "многоугольник",
            "окружность",
            "эллипс",
            "отрезок",
            "всё из перечисленного"
        ],
        correctAnswer: 3
    },
    {
        text: "Как выглядит ось координат в  SVG?",
        answers: [
            "ось Х направленна  направо, Y вверх",
            "ось Х направленна  налево, Y вверх",
            "ось Х направленна  направо, Y вниз",
            "ось Х направленна  налево, Y вниз"
        ],
        correctAnswer: 2
    },
    {
        text: 'Для закрашивания внутренней части используется атрибут:',
        answers: [
            'fill',
            'stroke',
            'rect',
        ],
        correctAnswer: 0
    },
    {
        text: 'В данном фрагменте программы значение round указывает на то, что концы линии',
        img: 'img/test1.png',
        answers: [
            'это количество точек в изображении',
            'это количество точек, приходящееся на единицу длины',
            'это количество пикселей по горизонтали и вертикали',
            'это минимальный элемент растрового изображени',
            'это минимальный элемент векторного изображения',
        ],
        correctAnswer: 1
    },
];

let out = '';
for (let q = 0; q < questions.length; ++q) {
    let question = questions[q];
    let idx = 1 + q;

    out += ('<li><span class="quest">' + question.text + '</span><br>');
    if (question.img !== undefined) out += (`<img class="andrey" src=${question.img}>`);
    for (let i in question.answers) {
        out += ('<label><input type=radio name="q' + idx + '" value="' + i +
            '" onClick="Engine(' + q + ', this.value)"> ' + question.answers[i] + '</label><br>');
    }
    out += ('</li>');
}

document.querySelector('.test').innerHTML = out;

let yourAns = new Array;
let score = 0;

function Engine(question, answer) {
    yourAns[question] = answer;
}

document.querySelector('.checkTest').addEventListener('click', Score)

function Score() {
    let answerText = "Результаты:\n";
    for (let i = 0; i < yourAns.length; ++i) {
        let num = i + 1;
        answerText = answerText + "\n    Вопрос №" + num + "";
        if (yourAns[i] != questions[i].correctAnswer) {
            answerText = answerText + "\n    Правильный ответ: " +
                questions[i].answers[questions[i].correctAnswer] + "\n";
        } else {
            answerText = answerText + ": Верно! \n";
            ++score;
        }
    }

    answerText = "\nВсего правильных ответов: " + score + " из 5";

    alert(answerText);
    yourAns = [];
    score = 0;
    window.location.href = 'test.html';
    clearForm("quiz");
}

function clearForm(name) {
    let f = document.forms[name];
    for (let i = 0; i < f.elements.length; ++i) {
        if (f.elements[i].checked)
            f.elements[i].checked = false;
    }
}
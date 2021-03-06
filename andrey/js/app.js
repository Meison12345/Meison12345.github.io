'use strict';
const title = 'Этот тест позволяет оценить Ваши общие знания в сфере компьютерной графики';
const subtitle = "Этот тест позволяет оценить Ваши общие знания в сфере компьютерной графики";
const questions = [{
        text: "Что лучше использовать для создания анимаций картинок?",
        answers: [
            "CANVAS",
            "SVG"
        ],
        correctAnswer: 1 // нумерация ответов с нуля!
    },
    {
        text: "В каком формате хранится SVG?",
        answers: [
            "PNG",
            "JPEG",
            "XML",
            "HTML"
        ],
        correctAnswer: 2
    },
    {
        text: "Какую форму имеет пиксель?",
        answers: [
            "квадрат",
            "круг",
            "треугольник",
            "овал"
        ],
        correctAnswer: 0
    },
    {
        text: 'Как называется эффект, который наблюдается при увеличении масштаба растрового изображения?',
        answers: [
            'деформация',
            'растеризация',
            'пикселизация',
            'векторизация',
            'визуализация',
        ],
        correctAnswer: 2
    },
    {
        text: 'Что такое разрешение?',
        answers: [
            'это количество точек в изображении',
            'это количество точек, приходящееся на единицу длины',
            'это количество пикселей по горизонтали и вертикали',
            'это минимальный элемент растрового изображени',
            'это минимальный элемент векторного изображения',
        ],
        correctAnswer: 1
    },
    {
        text: 'Где используется растровая графика?',
        answers: [
            'для хранения и обработки фотографий и в сфере веб-дизайна',
            'в полиграфии',
            'при создании ландшафта',
            'в машиностроении, металлургии',
        ],
        correctAnswer: 0
    },
];

let out = '';
for (let q = 0; q < questions.length; ++q) {
    let question = questions[q];
    let idx = 1 + q;

    out += ('<li><span class="quest">' + question.text + '</span><br>');
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

    answerText = "\nВсего правильных ответов: " + score + "\n";

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
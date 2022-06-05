'use strict';

var title = 'Этот тест позволяет оценить Ваши общие знания в сфере компьютерной графики';
var subtitle = "Этот тест позволяет оценить Ваши общие знания в сфере компьютерной графики";
var questions = [{
  text: "Что такое компьютерная графика?",
  answers: ["специальная область информатики, которая изучает методы и способы создания и обработки изображений", "комплекс программного обеспечения для подготовки иллюстрированного материала", "специальная область информатики, изучающая способы и методы кодирования информации", "способ кодирования графической информации с использованием вычислительной техники"],
  correctAnswer: 0 // нумерация ответов с нуля!

}, {
  text: "Сколько существует видов веб-графики",
  answers: ["1", "2", "3", "4"],
  correctAnswer: 4
}, {
  text: "Какую форму имеет пиксель?",
  answers: ["квадрат", "круг", "треугольник", "овал"],
  correctAnswer: 0
}, {
  text: 'Верно ли, что термины "пиксель", "пиксел", "точка", "растр" идентичны?',
  answers: ["Да", "Нет"],
  correctAnswer: 0
}, {
  text: 'Как называется эффект, который наблюдается при увеличении масштаба растрового изображения?',
  answers: ['деформация', 'растеризация', 'пикселизация', 'векторизация', 'визуализация'],
  correctAnswer: 2
}, {
  text: 'Что такое разрешение?',
  answers: ['это количество точек в изображении', 'это количество точек, приходящееся на единицу длины', 'это количество пикселей по горизонтали и вертикали', 'это минимальный элемент растрового изображени', 'это минимальный элемент векторного изображения'],
  correctAnswer: 1
}, {
  text: 'Где используется растровая графика?',
  answers: ['для хранения и обработки фотографий и в сфере веб-дизайна', 'в полиграфии', 'при создании ландшафта', 'в машиностроении, металлургии'],
  correctAnswer: 0
}];
var out = '';

for (var q = 0; q < questions.length; ++q) {
  var question = questions[q];
  var idx = 1 + q;
  out += '<li><span class="quest">' + question.text + '</span><br>';

  for (var i in question.answers) {
    out += '<label><input type=radio name="q' + idx + '" value="' + i + '" onClick="Engine(' + q + ', this.value)"> ' + question.answers[i] + '</label><br>';
  }

  out += '</li>';
}

document.querySelector('.test').innerHTML = out;
var yourAns = new Array();
var score = 0;

function Engine(question, answer) {
  yourAns[question] = answer;
}

document.querySelector('.checkTest').addEventListener('click', Score);

function Score() {
  var answerText = "Результаты:\n";

  for (var _i = 0; _i < yourAns.length; ++_i) {
    var num = _i + 1;
    answerText = answerText + "\n    Вопрос №" + num + "";

    if (yourAns[_i] != questions[_i].correctAnswer) {
      answerText = answerText + "\n    Правильный ответ: " + questions[_i].answers[questions[_i].correctAnswer] + "\n";
    } else {
      answerText = answerText + ": Верно! \n";
      ++score;
    }
  }

  answerText = answerText + "\nВсего правильных ответов: " + score + "\n";
  alert(answerText);
  yourAns = [];
  score = 0;
  clearForm("quiz");
}

function clearForm(name) {
  var f = document.forms[name];

  for (var _i2 = 0; _i2 < f.elements.length; ++_i2) {
    if (f.elements[_i2].checked) f.elements[_i2].checked = false;
  }
}
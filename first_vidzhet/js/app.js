'use strict';
let textInsert = document.querySelector('.modal-win-text-field');
let dropMenu = document.querySelector('.dropMenu');
let dropMenuNav = document.querySelector('.dropMenu-nav');
let outData = document.getElementById('out-data');
let masDropMenu = [{
        id: 'lead.id',
        name: 'ID'
    },
    {
        id: 'lead.name',
        name: 'Название сделки',
    },
    {
        id: 'lead.money',
        name: 'Бюджет',
    },
    {
        id: 'lead.status',
        name: 'Статус',
    },
    {
        id: 'lead.responsible',
        name: 'Ответственный',
    },
    {
        id: 'lead.clear',
        name: 'Чёткий',
    },
];

/**
 * @description Выведение категорий в список
 */
(function setDataDropMenu() {
    for (let key of masDropMenu) {
        let li = document.createElement('li');
        li.classList.add('dropMenu-elem');
        li.textContent = ` ${key['name']} `;
        li.setAttribute('data-id', `{{${key.id}}}`);
        dropMenuNav.appendChild(li);
    }
})();

/**
 * @description Закртытие модального окна через Esc
 */
document.body.addEventListener('keydown', function (param) {
    if (param.key === 'Escape') {
        document.querySelector('.keyboardShortcut').classList.remove('keyboardShortcut-active');
        dropMenu.classList.add('active');
    }
});


let div;
textInsert.addEventListener('keydown', function (param) {
    if (param.key === '[') {
        param.preventDefault();
        document.querySelector('.keyboardShortcut').classList.remove('keyboardShortcut-active');
        div = document.createElement('span');
        div.classList.add('test');
        textInsert.children[textInsert.children.length - 1].appendChild(div);
        div.innerHTML += ' ';
        try {
            if (textInsert.querySelectorAll('div')[textInsert.querySelectorAll('div').length - 1].textContent === ' ' || textInsert.querySelectorAll('div')[textInsert.querySelectorAll('div').length - 1].textContent === '') {
                document.querySelector('br').remove();
            }
        } catch (error) {}
        openCaret();
        liveSearch();
        dropMenu.classList.remove('active');
    } else if (textInsert.children[0].textContent[0] == ' ' && textInsert.textContent.trim().length <= 0) {
        if (param.key === 'Backspace' || param.key === 'Delete')
            param.preventDefault();
    } else if (param.key === 'Enter') {
        try {
            document.querySelectorAll('.free-el')[document.querySelectorAll('.free-el').length - 1].dataset.id = '';
            document.querySelectorAll('.help-span')[document.querySelectorAll('.help-span').length - 1].dataset.id = '';
        } catch (error) {}

        document.querySelectorAll('.free-el').forEach(ek => {
            setTimeout(() => {
                ek.setAttribute('data-id', ek.textContent);
            }, 30);
        });

    } else if (textInsert.children[0].textContent[0] == ' ' && textInsert.textContent.trim().length <= 0) {
        if (param.key === 'Backspace' || param.key === 'Delete')
            param.preventDefault();
    }
    try {
        document.querySelectorAll('.free-el').forEach(ek => {
            setTimeout(() => {
                ek.setAttribute('data-id', ek.textContent);
                if (ek.textContent.length <= 1 && param.key === 'Backspace') {}
            }, 30);
        });

    } catch (error) {}

});


dropMenuNav.addEventListener('click', function (param) {
    if (param.target.localName == 'li') {
        let span = document.createElement('span');
        let HelpSpan = document.createElement('span');
        HelpSpan.classList.add('www');
        span.classList.add('li-elem');
        span.setAttribute('data-id', param.target.dataset.id);
        span.textContent = param.target.textContent;
        HelpSpan.appendChild(span);
        try {
            if (textInsert.querySelectorAll('div')[textInsert.querySelectorAll('div').length - 1].tagName === 'DIV') {
                textInsert.querySelectorAll('div')[textInsert.querySelectorAll('div').length - 1].appendChild(HelpSpan);
                let span = document.createElement('span');
                span.classList.add('free-el');
                textInsert.querySelectorAll('div')[textInsert.querySelectorAll('div').length - 1].append(span);
                span.textContent += ' ';
                setTimeout(() => {
                    textInsert.lastElementChild.remove();
                }, 10);

            } else {}
        } catch (error) {
            textInsert.appendChild(HelpSpan);
        }

        // textInsert.appendChild(HelpSpan); //Тут
        dropMenu.classList.add('active');
        let spanHelp = document.createElement('span');
        spanHelp.classList.add('free-el');
        spanHelp.insertAdjacentHTML('beforeend', ' ');
        HelpSpan.innerHTML += '&nbsp;';

        document.querySelectorAll('.li-elem').forEach(function (el) {
            el.setAttribute('contenteditable', 'false');
        });

        textInsert.appendChild(spanHelp);

    }
    textInsert.appendChild(div);
    document.querySelector('.test').remove();
});



let val;
/**
 * @description выполнение поиска из дроп меню
 */
function liveSearch() {
    textInsert.addEventListener('keyup', function (param) {
        try {
            let value = document.querySelectorAll('.test')[document.querySelectorAll('.test').length - 1].textContent.toLowerCase().trim();
            let list = document.querySelectorAll('.dropMenu-elem');
            if (value != '') {
                list.forEach(function (elem) {
                    if (elem.innerText.toLowerCase().search(value) == -1) {
                        elem.classList.add('hide');
                    } else {
                        elem.classList.remove('hide');
                    }
                });
            } else {
                list.forEach(function (elem) {
                    elem.classList.remove('hide');
                });
            }
        } catch (error) {}
    });

}

let span = document.createElement('span');
span.classList.add('help-span');
span.setAttribute('contenteditable', 'true');
span.innerHTML = '&nbsp;';
textInsert.appendChild(span);
textInsert.addEventListener('keyup', function (param) {
    span.setAttribute('data-id', span.textContent);

    document.querySelectorAll('.www').forEach(function (par) {
        if (par.nextElementSibling === null && param.key === 'Backspace') {
            console.log(par);
            let el = par.previousElementSibling;
            let range = document.createRange();
            let sel = window.getSelection();

            range.setStart(el, 1);
            range.collapse(true);

            sel.removeAllRanges();
            sel.addRange(range);
            par.remove();
        }
    });

});

/**
 * @description При открытии тэга, каретка переносится в нужное место
 */
function openCaret() {
    let el = document.querySelector('.test')
    let range = document.createRange();
    let sel = window.getSelection();

    range.setStart(el, 1);
    range.collapse(true);

    sel.removeAllRanges();
    sel.addRange(range);
}


/**
 * @description При изменение высоты div'а, дроп меню подстраивается по неё
 */
let a = +window.getComputedStyle(dropMenu).top.slice(0, -2);
let resizeObserver = new ResizeObserver(function (param) {
    dropMenu.style.top = `${a + param[0].contentRect.height}px`;
});
resizeObserver.observe(textInsert);
let str, newStr = '';

setInterval(() => {
    let z = '';
    document.querySelector('.help-span').dataset.id = document.querySelector('.help-span').textContent;
    document.querySelectorAll('.free-el').forEach(function (el) {
        el.dataset.id = el.textContent;
    })
    try {
        document.querySelectorAll('.li-elem').forEach(function (el) {
            el.nextSibling.textContent = ' ';
        });
    } catch (error) {

    }


    document.querySelectorAll('.modal-win-text-field span').forEach(el => {
        z += el.dataset.id + '';
    });



    str = z.trim().replace(/\s+/g, ' ');
    str = str.trim().replace(/undefined/gmi, '');

    outData.textContent = str;
}, 30);


document.querySelector('.keyboard').addEventListener('click', function (param) {
    document.querySelector('.keyboardShortcut').classList.toggle('keyboardShortcut-active');
});
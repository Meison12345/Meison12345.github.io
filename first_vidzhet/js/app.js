'use strict';
// document.addEventListener('DOMContentLoaded', function() {
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
let modalWinTextFieldLi = document.querySelector('.modal-win-text-field-li');

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
        dropMenu.classList.add('active');
    }
});



// textInsert.textContent = '';

let div;
textInsert.addEventListener('keydown', function (param) {
    // getContentedText();
    // if (textInsert.children[textInsert.childElementCount - 1] === document.querySelectorAll('.li-elem')[document.querySelectorAll('.li-elem').length - 1] && param.key === 'Backspace') {
    //     console.log('a');
    // }
    try {
        if (document.querySelectorAll('.free-el')[document.querySelectorAll('.free-el').length - 1].textContent === ' ' && param.key === 'Backspace') {
            document.querySelectorAll('.li-elem')[document.querySelectorAll('.li-elem').length - 1].remove();
            document.querySelectorAll('.free-el')[document.querySelectorAll('.free-el').length].remove();
        }

        // for(let i =0; i< textInsert.children.length; i++){
        //     if(textInsert.children[i] === ){
        //     console.log(textInsert.children[i])
        //     }
        // }
    } catch (error) {

    }


    if (param.key === '[') {
        param.preventDefault();
        div = document.createElement('span');
        div.classList.add('test');
        // if (textInsert.children[textInsert.children.length - 1] === document.querySelectorAll('div')[document.querySelectorAll('.test').length - 1]) {
        //     textInsert.children[textInsert.children.length - 1].append(div);
        //     div.innerHTML += ' ';
        // } else {
        textInsert.children[textInsert.children.length - 1].appendChild(div);
        // div.innerHTML += '&nbsp;'
        // div.innerHTML += ' ';
        div.innerHTML += ' ';
        try {
            if (textInsert.querySelectorAll('div')[textInsert.querySelectorAll('div').length - 1].textContent === ' ' || textInsert.querySelectorAll('div')[textInsert.querySelectorAll('div').length - 1].textContent === '') {
                // textInsert.querySelectorAll('div')[textInsert.querySelectorAll('div').length - 1].remove();
                document.querySelector('br').remove();
            }
        } catch (error) {

        }


        // }

        openCaret();
        liveSearch();
        dropMenu.classList.remove('active');
    }
    // else if (param.key === ']') {
    //     param.preventDefault();
    //     dropMenu.classList.add('active');
    //     let div = document.createElement('span');
    //     div.classList.add('free-el');
    //     //Это можно оптимизировать, если смотреть на последний элемент(проверить)
    //     document.querySelectorAll('.li-elem').forEach(function(el) {
    //         el.setAttribute('contenteditable', 'false');
    //     });
    //     textInsert.appendChild(div);
    // console.log(div.textContent);
    // } 
    else if (param.key === 'Enter') {
        try {
            document.querySelectorAll('.free-el')[document.querySelectorAll('.free-el').length - 1].dataset.id = '';
            document.querySelectorAll('.help-span')[document.querySelectorAll('.help-span').length - 1].dataset.id = '';
        } catch (error) {}
        try {
            // if (document.querySelectorAll('.free-el')[document.querySelectorAll('.free-el').length - 1].textContent === ' ' && param.key === 'Backspace') {
            //     document.querySelectorAll('.li-elem')[document.querySelectorAll('.li-elem').length - 1].remove();
            //     document.querySelectorAll('.free-el')[document.querySelectorAll('.free-el').length - 1].remove();
            //     document.querySelectorAll('.help-span')[document.querySelectorAll('.help-span').length - 1].remove();
            // }
            // textInsert.querySelectorAll('div')[textInsert.querySelectorAll('div').length - 1].remove();
            // document.querySelectorAll('.help-span')[document.querySelectorAll('.help-span').length - 1].remove();
            // document.querySelector('br').remove();

        } catch (error) {

        }
        // document.querySelectorAll('.free-el')[document.querySelectorAll('.free-el').length - 1].dataset.id = '';
        // param.preventDefault();
        // textInsert.innerHTML += '<div><br></div>'
        // document.querySelectorAll('.free-el')[document.querySelectorAll('.free-el').length - 1].textContent += ' ';
        document.querySelectorAll('.free-el').forEach(ek => {
            setTimeout(() => {
                ek.setAttribute('data-id', ek.textContent);
                if (ek.textContent.length <= 1 && param.key === 'Backspace') {
                    ek.textContent = ' ';
                }
            }, 30);
        });

        // let div = document.createElement('div');
        // div.classList.add('enter');
        // div.innerText += ' ';
        // textInsert.appendChild(div);



        // let el = document.querySelectorAll('.enter')[document.querySelectorAll('.enter').length - 1];
        // let range = document.createRange();
        // let sel = window.getSelection();

        // // console.log(el);
        // range.setStart(el, 1);
        // range.collapse(true);

        // sel.removeAllRanges();
        // sel.addRange(range);








    } else if (textInsert.children[0].textContent[0] == ' ' && textInsert.textContent.trim().length <= 0) {
        if (param.key === 'Backspace' || param.key === 'Delete')
            param.preventDefault();
    }
    try {
        document.querySelectorAll('.free-el').forEach(ek => {
            setTimeout(() => {
                ek.setAttribute('data-id', ek.textContent);
                if (ek.textContent.length <= 1 && param.key === 'Backspace') {
                    ek.textContent = ' ';
                }
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
        textInsert.appendChild(span);
        // getContentedText();
        dropMenu.classList.add('active');
        let spanHelp = document.createElement('span');
        spanHelp.classList.add('free-el');

        // spanHelp.innerHTML = ' ';
        // spanHelp.innerHTML = '';
        spanHelp.insertAdjacentHTML('beforeend', ' ');

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
textInsert.addEventListener('keyup', function () {
    span.setAttribute('data-id', span.textContent);
});

/**
 * @description При открытии тэга, каретка переносится в нужное место
 */
function openCaret() {
    let el = document.querySelector('.test')
    let range = document.createRange();
    let sel = window.getSelection();

    // console.log(el);
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

/**
 * выводит введенные данные пользоватем в невидимый инпут в нужно формате
 */
// function getContentedText() {
//     let z = '';
//     setTimeout(() => {
//         document.querySelectorAll('.modal-win-text-field span').forEach(el => {
//             // console.log(z);
//             z += el.dataset.id + ' ';
//         });
//         // if()
//         // console.log(z);
//         str = z.trim().replace(/\s+/g, ' ');
//         str = str.trim().replace(/undefined/gmi, '');

//         outData.textContent = str;
//     }, 30);
// }

setInterval(() => {
    let z = '';
    document.querySelectorAll('.modal-win-text-field span').forEach(el => {
        z += el.dataset.id + ' ';
    });
    str = z.trim().replace(/\s+/g, ' ');
    str = str.trim().replace(/undefined/gmi, '');

    outData.textContent = str;
}, 50);

// });
// });
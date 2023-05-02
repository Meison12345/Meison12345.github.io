document.addEventListener("DOMContentLoaded", function () {
    const counterEl = document.querySelector('.clicker__counter');
    const clickBtn = document.querySelector('.clicker__button');
    const upgrade1CostEl = [...document.querySelectorAll('.clicker__upgrade1-cost')];
    const upgrade1Btn = [...document.querySelectorAll('.clicker__upgrade1-button')];
    const upgrade11CostEl = [...document.querySelectorAll('.clicker__upgrade11-cost')];
    const upgrade11Btn = [...document.querySelectorAll('.clicker__upgrade11-button')];
    const upgrade12CostEl = [...document.querySelectorAll('.clicker__upgrade12-cost')];
    const upgrade12Btn = [...document.querySelectorAll('.clicker__upgrade12-button')];
    const upgrade13CostEl = [...document.querySelectorAll('.clicker__upgrade13-cost')];
    const upgrade13Btn = [...document.querySelectorAll('.clicker__upgrade13-button')];
    const upgrade14CostEl = [...document.querySelectorAll('.clicker__upgrade14-cost')];
    const upgrade14Btn = [...document.querySelectorAll('.clicker__upgrade14-button')];
    const upgrade15CostEl = [...document.querySelectorAll('.clicker__upgrade15-cost')];
    const upgrade15Btn = [...document.querySelectorAll('.clicker__upgrade15-button')];
    const autoClickCostEl = [...document.querySelectorAll('.clicker__upgrade2-cost')];
    const autoClickBtn = [...document.querySelectorAll('.clicker__upgrade2-button')];
    const changeBackgroundBtn = document.querySelector('.clicker__upgrade3-button');
    const achievementsSoundOpen = document.querySelector('#achievements-open');
    const masBtnUpdate = document.querySelectorAll('.clicker__upgrade1');
    const clickSound = document.getElementById('click-sound');
    const clickAchievements = document.querySelector('.clicker__upgrade1');
    const clickButton = document.getElementById('click-button');
    const btnOnMusic = document.querySelector('.sound-on');
    const btnOffMusic = document.querySelector('.sound-off');
    const btnOnSound = document.querySelector('.soundClickOn');
    const btnOffSound = document.querySelector('.soundClickOff');
    const Maintheme = document.querySelector('#click-main-theme');
    const checkboxVolumeBtn = document.querySelector('.control__panel-music');
    const checkboxVolume = document.querySelector('#checkbox-volume');
    const mainBody = document.body;
    const center = document.querySelector('.center');
    const changeBlockNumber = 50;
    const masBackground = ['1.jpg', '2.jpg', '3.jpg', '4.png'];
    const masBlock = ['1.png', '2.webp', '3.png', '4.png', '5.png', '6.webp', '7.png', '8.webp', '9.webp', '10.webp', '11.webp', '12.webp', '13.webp', '14.webp', '15.webp', '16.webp', '17.webp', '18.webp', '19.webp', '20.webp'];


    let counter = 0;
    let counterChangeBlock = 0
    let upgrade1Cost = 100;
    let upgrade11Cost = 300;
    let upgrade12Cost = 700;
    let upgrade13Cost = 1500;
    let upgrade14Cost = 10000;
    let upgrade15Cost = 40000;
    let upgrade1Multiplier = 1;
    let autoClickCost = 50;
    let autoClicksPerSecond = 2;
    let currentIdxBackground = window.getComputedStyle(center).backgroundImage;
    let currentIdxBlock = window.getComputedStyle(clickBtn).backgroundImage;

    clickBtn.addEventListener('click', function () {
        counterChangeBlock++;
        counter++;
        if (upgrade1Multiplier > 1) {
            for (let i = 0; i < upgrade1Multiplier - 1; i++) {
                counter++;
            }
        }

        if (counterChangeBlock % changeBlockNumber === 0) {
            clickBtn.src = `./assets/img/block/${getRandomBlock()}`;
        }

        update();
    });

    // upgrade1Btn.addEventListener('click', function () {
    //     if (counter >= upgrade1Cost) {
    //         counter -= upgrade1Cost;
    //         upgrade1Multiplier += 2;
    //         upgrade1Cost *= 2;
    //         update();
    //     }
    // });

    upgrade1Btn.forEach(el => {
        el.addEventListener('click', function () {
            if (counter >= upgrade1Cost) {
                counter -= upgrade1Cost;
                upgrade1Multiplier += 2;
                upgrade1Cost *= 2;
                update();
            }
        })
    })

    upgrade11Btn.forEach(el => {
        el.addEventListener('click', function () {
            if (counter >= upgrade11Cost) {
                counter -= upgrade11Cost;
                upgrade1Multiplier += 3;
                upgrade11Cost *= 2;
                update();
            }
        })
    })

    upgrade12Btn.forEach(el => {
        el.addEventListener('click', function () {
            if (counter >= upgrade12Cost) {
                counter -= upgrade12Cost;
                upgrade1Multiplier += 7;
                upgrade12Cost *= 2;
                update();
            }
        })
    })

    upgrade13Btn.forEach(el => {
        el.addEventListener('click', function () {
            if (counter >= upgrade13Cost) {
                counter -= upgrade13Cost;
                upgrade1Multiplier += 10;
                upgrade13Cost *= 2;
                update();
            }
        })
    })

    upgrade14Btn.forEach(el => {
        el.addEventListener('click', function () {
            if (counter >= upgrade14Cost) {
                counter -= upgrade14Cost;
                upgrade1Multiplier += 20;
                upgrade14Cost *= 2;
                update();
            }
        })
    })

    upgrade15Btn.forEach(el => {
        el.addEventListener('click', function () {
            if (counter >= upgrade15Cost) {
                counter -= upgrade15Cost;
                upgrade1Multiplier += 40;
                upgrade15Cost *= 2;
                update();
            }
        })
    })

    autoClickBtn.forEach(el => {
        el.addEventListener('click', function () {
            if (counter >= autoClickCost) {
                counter -= autoClickCost;
                autoClickCost *= 1.5;
                setInterval(function () {
                    counter += autoClicksPerSecond;
                    update();
                }, 1000);
                update();
            }
        })
    })


    const allAudioEl = [...document.querySelectorAll('audio')]
    checkboxVolumeBtn.addEventListener('click', () => {
        const flag = document.querySelector('.sound-off').classList.contains('sound-icon-visible');
        allAudioEl.forEach((audio) => {
            if (flag) {
                audio.muted = true;
            } else {
                audio.muted = false;
            }
        });

    });

    //При нажатии на клавишу мыши изображение увеличивается
    clickBtn.addEventListener('mousedown', function () {
        this.style.transform = 'scale(1.05)';
    });

    //При отпускании клавиши мыши изображение уменьшается
    clickBtn.addEventListener('mouseup', function () {
        this.style.transform = 'scale(1)';
    });

    /** @description Функция обновляет текстовые значения элементов счётчика*/
    update = () => {
        currentIdxBackground = window.getComputedStyle(center).backgroundImage;
        currentIdxBlock = window.getComputedStyle(clickBtn).backgroundImage;
        counterEl.textContent = Math.round(counter);
        upgrade11CostEl.forEach(el => el.textContent = Math.round(upgrade11Cost));
        upgrade12CostEl.forEach(el => el.textContent = Math.round(upgrade12Cost));
        upgrade13CostEl.forEach(el => el.textContent = Math.round(upgrade13Cost));
        upgrade14CostEl.forEach(el => el.textContent = Math.round(upgrade14Cost));
        upgrade15CostEl.forEach(el => el.textContent = Math.round(upgrade15Cost));
        upgrade1CostEl.forEach(el => el.textContent = Math.round(upgrade1Cost));
        autoClickCostEl.forEach(el => el.textContent = Math.round(autoClickCost));
    }

    /** @description Функция получения случайного уникального бэкграунда*/
    getRandomBackground = () => {
        let newBackground = masBackground[Math.floor(Math.random() * masBackground.length)];
        while (newBackground === currentIdxBackground.match(/\d+\.jpg|png/gmi)[0]) {
            newBackground = masBackground[Math.floor(Math.random() * masBackground.length)];
        }
        return newBackground;
    }

    /** @description Функция получения случайного уникального блока*/
    getRandomBlock = () => {
        let newBlock = masBlock[Math.floor(Math.random() * masBlock.length)];
        while (newBlock === currentIdxBlock) {
            newBlock = masBlock[Math.floor(Math.random() * masBlock.length)];
        }
        return newBlock;
    }


    //При покупке этого улучшения фон будет меняться в случайном порядке
    changeBackgroundBtn.addEventListener('click', () => {
        if (counter >= 150) {
            counter -= 150;
            center.style.backgroundImage = `url(./assets/img/background/${getRandomBackground()})`;
            update();
        }
    });


    playSound = () => {
        clickSound.currentTime = 0; // переводим проигрывание звука в начало
        clickSound.play(); // воспроизводим звук
    }


    playBuyImprovement = () => {
        achievementsSoundOpen.currentTime = 0; // переводим проигрывание звука в начало
        achievementsSoundOpen.play(); // воспроизводим звук
    }

    [...masBtnUpdate].forEach(el => {
        el.addEventListener('click', playBuyImprovement)
    })

    clickBtn.addEventListener('click', playSound);
    clickBtn.addEventListener('touch', playSound);

    upgrade1Btn.forEach(el => el.addEventListener('click', playBuyImprovement));

    autoClickBtn.forEach(el => el.addEventListener('click', playSound));

    changeBackgroundBtn.addEventListener('click', playSound);


    //Предварительная загрузка всех изображений
    const preloadImages = () => {
        for (const image of masBackground) {
            const img = new Image();
            img.src = `./assets/img/background/${image}`;
        }
    };


    playMaintheme = () => {
        Maintheme.play(); // воспроизводим фоновую звук
        btnOnMusic.classList.add('sound-icon-visible');
        btnOffMusic.classList.remove('sound-icon-visible');
    }

    stopMaintheme = () => {
        Maintheme.pause(); // Останавливаем фоновую музыку
        btnOffMusic.classList.toggle('sound-icon-visible');
        btnOnMusic.classList.toggle('sound-icon-visible');
    }

    // playSoundClick = () => {
    //     clickSound.play(); // воспроизводим фоновую звук
    //     checkboxVolume.play(); // воспроизводим фоновую звук
    //     achievementsSoundOpen.play(); // воспроизводим фоновую звук
    //     btnOnSound.classList.add('sound-icon-visible');
    //     btnOffSound.classList.remove('sound-icon-visible');
    // }

    // stopSoundClick = () => {
    //     clickSound.pause(); // Останавливаем фоновую музыку
    //     checkboxVolume.pause(); // Останавливаем фоновую музыку
    //     achievementsSoundOpen.pause(); // Останавливаем фоновую музыку
    //     btnOffSound.classList.toggle('sound-icon-visible');
    //     btnOnSound.classList.toggle('sound-icon-visible');
    //     upgrade1Btn.removeEventListener('click', playBuyImprovement);
    // }

    // btnOnSound.addEventListener('click', stopSoundClick);
    // btnOffSound.addEventListener('click', playSoundClick);

    btnOnMusic.addEventListener('click', stopMaintheme);
    btnOffMusic.addEventListener('click', playMaintheme);

    // Функция, которая создает частицу
    function createParticle(x, y) {
        // Создаем элемент div
        const particle = document.createElement('div');
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.classList.add('particle');


        document.body.appendChild(particle);
        // Анимация движения частицы
        const xDiff = Math.floor(Math.random() * 60) - 30 + Math.floor(Math.random(10) * 50); // Случайное смещение по оси X
        const yDiff = Math.floor(Math.random() * 60) - 30 + Math.floor(Math.random(10) * 50); // Случайное смещение по оси X
        const animation = particle.animate(
            [{
                    transform: `translateY(0) translateX(0) scale(1)`,
                    opacity: 1,
                },
                {
                    transform: `translateY(${yDiff}px) translateX(${xDiff}px) scale(0.5)`,
                    opacity: 0
                }
            ], {
                duration: 500,
                easing: 'ease-in-out'
            }
        );

        animation.onfinish = () => {
            // Анимация падения частицы
            const fallAnimation = particle.animate(
                [{
                        transform: `translateY(${yDiff}px) translateX(${xDiff}px) scale(0.5)`,
                        opacity: 0
                    },
                    {
                        transform: `translateY(${yDiff}px) translateX(${xDiff}px) scale(0)`,
                        opacity: 0
                    }
                ], {
                    duration: 500,
                    easing: 'linear'
                }
            );
            fallAnimation.onfinish = () => {
                particle.remove();
            };
        };
    }

    // Функция, которая обрабатывает клик на элементе
    function handleClick(event) {
        // Получаем координаты клика
        const x = event.clientX;
        const y = event.clientY;
        // Создаем несколько частиц
        for (let i = 0; i < 5; i++) {
            createParticle(x, y);
        }
    }

    // Навешиваем обработчик события на элемент
    clickBtn.addEventListener('click', handleClick);

    // Добавляем обработчик события beforeunload
    window.addEventListener('beforeunload', () => {
        Maintheme.pause();
    });

    // Добавляем обработчик события visibilitychange
    document.addEventListener('visibilitychange', () => {
        let data = document.querySelector('.sound-off').classList.contains('sound-icon-visible')
        if (document.hidden || data) {
            Maintheme.pause();
        } else {
            Maintheme.play();
        }
    });

    document.addEventListener('contextmenu', function (event) {
        event.preventDefault();
    });

    preloadImages();
    update();

    // function scaleGame() {
    //     const wrapper = document.querySelector('.clicker-wrapper');
    //     const width = wrapper.clientWidth;
    //     const height = wrapper.clientHeight;
    //     const gameWidth = 1000;
    //     const gameHeight = 1000;
    //     const scaleX = width / gameWidth;
    //     const scaleY = height / gameHeight;
    //     const scale = Math.min(scaleX, scaleY);
    //     wrapper.style.transform = `scale(${scale})`;
    // }

    // window.addEventListener('resize', scaleGame);
    // scaleGame(); // Вызываем функцию масштабирования при загрузке страницы



    //Открытие окна достижений
    // const modalWinAchiv = document.querySelector('.control__panel-achievements');

    // modalWinAchiv.addEventListener('click', function (e) {
    //     console.log(1)
    // })




    // YaGames
    //     .init()
    //     .then(ysdk => {
    //         console.log('Yandex SDK initialized');
    //         window.ysdk = ysdk;
    //     });

    counter = 50;
});
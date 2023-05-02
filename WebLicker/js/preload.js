document.addEventListener("DOMContentLoaded", function () {
    // Создаем новый экземпляр PreloadJS
    const preload = new createjs.LoadQueue();
    const gameBlock = document.querySelector('.center');
    const brogressBar = document.querySelector('.progress');
    // Устанавливаем максимальное количество одновременных загрузок
    preload.setMaxConnections(5);

    // Добавляем ресурсы для загрузки
    preload.loadManifest([{
            id: 'image1',
            src: 'assets/img/background/1.jpg'
        },
        //    {
        //        id: 'image2',
        //        src: 'assets/img/background/2.jpg'
        //    },
        //    {
        //        id: 'image3',
        //        src: 'assets/img/background/3.jpg'
        //    },
        //    {
        //        id: 'image4',
        //        src: 'assets/img/background/4.png'
        //    },
        //    {
        //        id: 'block1',
        //        src: 'assets/img/block/1.png'
        //    },
        //    {
        //        id: 'block2',
        //        src: 'assets/img/block/10.webp'
        //    },
        //    {
        //        id: 'block3',
        //        src: 'assets/img/block/11.webp'
        //    },
        //    {
        //        id: 'block4',
        //        src: 'assets/img/block/12.webp'
        //    },
        //    {
        //        id: 'block5',
        //        src: 'assets/img/block/13.webp'
        //    },
        //    {
        //        id: 'block6',
        //        src: 'assets/img/block/14.webp'
        //    },
        //    {
        //        id: 'block7',
        //        src: 'assets/img/block/15.webp'
        //    },
        //    {
        //        id: 'block8',
        //        src: 'assets/img/block/16.webp'
        //    },
        //    {
        //        id: 'block9',
        //        src: 'assets/img/block/17.webp'
        //    },
        //    {
        //        id: 'block10',
        //        src: 'assets/img/block/18.webp'
        //    },
        //    {
        //        id: 'block11',
        //        src: 'assets/img/block/19.webp'
        //    },
        //    {
        //        id: 'block12',
        //        src: 'assets/img/block/20.webp'
        //    },
        //    {
        //        id: 'block13',
        //        src: 'assets/img/block/2.webp'
        //    },
        //    {
        //        id: 'block14',
        //        src: 'assets/img/block/6.webp'
        //    },
        //    {
        //        id: 'block15',
        //        src: 'assets/img/block/8.webp'
        //    },
        //    {
        //        id: 'block16',
        //        src: 'assets/img/block/9.webp'
        //    },
        //    {
        //        id: 'miniDiamond',
        //        src: 'assets/img/block/miniDiamond.png'
        //    },
        //    {
        //        id: 'UI1',
        //        src: 'assets/img/UI/achievements.svg'
        //    },
        //    {
        //        id: 'UI2',
        //        src: 'assets/img/UI/playbutton.svg'
        //    },
        //    {
        //        id: 'UI3',
        //        src: 'assets/img/UI/sound-off-svgrepo-com.svg'
        //    },
        //    {
        //        id: 'UI4',
        //        src: 'assets/img/UI/sound-on-svgrepo-com.svg'
        //    },
        //    {
        //        id: 'UI5',
        //        src: 'assets/img/UI/icon.png'
        //    },
        //    {
        //        id: 'UI6',
        //        src: 'assets/img/UI/cinema-clapperboard.png'
        //    },
        //    {
        //        id: 'weapons1',
        //        src: 'assets/img/weapons/1.webp'
        //    },
        //    {
        //        id: 'weapons2',
        //        src: 'assets/img/weapons/2.webp'
        //    },
        //    {
        //        id: 'weapons3',
        //        src: 'assets/img/weapons/3.webp'
        //    },
        //    {
        //        id: 'weapons4',
        //        src: 'assets/img/weapons/4.webp'
        //    },
        //    {
        //        id: 'weapons5',
        //        src: 'assets/img/weapons/5.webp'
        //    },
        //    {
        //        id: 'weapons6',
        //        src: 'assets/img/weapons/6.webp'
        //    },
        //    {
        //        id: 'sound1',
        //        src: 'assets/sound/achievementsclick.mp3'
        //    },
        //    {
        //        id: 'sound2',
        //        src: 'assets/sound/click.mp3'
        //    },
        //    {
        //        id: 'sound3',
        //        src: 'assets/sound/enablevolume.mp3'
        //    },
        //    {
        //        id: 'sound4',
        //        src: 'assets/sound/fallbig.mp3'
        //    },
        //    {
        //        id: 'sound5',
        //        src: 'assets/sound/mainsound.mp3'
        //    },
        //    {
        //        id: 'sound6',
        //        src: 'assets/sound/wood_click.mp3'
        //    },
    ]);

    // Отображаем прогресс-бар
    preload.on('progress', (event) => {
        brogressBar.style.width = `${event.progress * 100}%`;
        //    console.log(`Loading progress: ${event.progress * 100}%`);
    });

    // Когда все ресурсы загружены, запускаем игру
    preload.on('complete', () => {
        //    console.log('All resources loaded, starting game');
        brogressBar.parentElement.classList.add('startGame')
        gameBlock.classList.remove('startGame');
    });

});
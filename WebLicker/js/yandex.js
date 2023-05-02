document.addEventListener("DOMContentLoaded", function () {
YaGames
    .init()
    .then(ysdk => {
        console.log('Yandex SDK initialized');
        window.ysdk = ysdk;
    });


let ysdk;
let player;

function initGame(params) {
    YaGames
        .init(params)
        .then(_sdk => {
            ysdk = _sdk;

            ysdk.features.LoadingAPI?.ready(); // Показываем SDK, что игра загрузилась и можно начинать играть
            console.log(ysdk, 'ysdk в функции init');
            
            ysdk.getPlayer().then(_player => {
                player = _player;
                console.log(player, 'Данные пользователя')
            }).catch(err => {
                console.log(err, 'Ошибка в getPlayer');
                // Ошибка при инициализации объекта Player.
            });


            player.setData({
                achievements: ['tr1', 'tr2', 'tr3'],
            }).then(() => {
                console.log('data is set');
            });
            
        })
        .catch(console.error);
}

initGame();






});


// ysdk.getReviews().then(function(result) {
//     console.log(result, 'Есть ли отзыв на сайте или нет'); // массив отзывов на игру
//   });

// btnRate.addEventListener('click', function(){
    // ysdk.feedback.canReview()
    // .then(({ value, reason }) => {
    //     console.log('value - это ' + value)
    //     if (value) {
    //         ysdk.feedback.requestReview()
    //             .then(({ feedbackSent }) => {
    //                 console.log(feedbackSent);
    //                 btnRate.style.display ='none';
    //             })
    //     } else {
    //         console.log(reason);
    //     }
    // })
// })
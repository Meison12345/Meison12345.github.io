'use strict'
$(function () {
    const text = 'Сегодня ( 13.09.2019 ) мы переехали. Остались очень довольны, несмотря на то, что к нам опоздали на 1,5 часа. Морально были к этому готовы ( в прошлый переезд в другой фирме тоже опоздали на час). Водитель заранее позвонил, предупредил, что задерживается. Когда он прибыл на место, то помог нам перенести вещи. В конечном, итоге очень понравилась фирма, планируем еще неоднократно обращаться!) Рекомендую всем!';
    const timer = 250;
    const TimeScrolling = 600;

    $('.reviews_link_head1').on('click', function (event) {
        event.preventDefault();
        $(this).css('visibility', 'hidden');
        $('.reviews_person_bot1').text(text);
    });


    $('.reviews_link_head2').on('click', function (event) {
        event.preventDefault();
        $(this).css('visibility', 'hidden');
        $('.reviews_person_bot2').text(text);
    });

    $('.reviews_link_head3').on('click', function (event) {
        event.preventDefault();
        $(this).css('visibility', 'hidden');
        $('.reviews_person_bot3').text(text);
    });


    $('.link_a').on('click', function (event) {
        event.preventDefault();
        if ($('#data_name').val().trim() == undefined || $('#data_name').val().trim() == null || $('#data_name').val().trim().length < 2) {
            setTimeout(() => {
                $('#data_name').css('border-bottom', '1px solid red');
            }, timer);
        } else {
            $('#data_name').css('border-bottom', '1px solid black');
        }


        if ($('#data_email').val().trim() == undefined || $('#data_email').val().trim() == null || $('#data_email').val().trim().length < 11 || $('#data_email').val().trim().length > 11) {
            setTimeout(() => {
                $('#data_email').css('border-bottom', '1px solid red');
            }, timer);
        } else {
            $('#data_email').css('border-bottom', '1px solid black');
        }


        if (!$('#1').is(':checked')) {
            setTimeout(() => {
                $('.contact_label').css('box-shadow', '0 1px red');
            }, timer);
        } else {
            $('.contact_label').css('box-shadow', 'none');
        }

    });




    $('.burger').on('click', function (element) {
        if ($(".menu").hasClass("menu_active")) {
            $('.menu').removeClass('menu_active');
            $('body').css('overflow', 'visible');
        } else {
            $('.menu').addClass('menu_active');
            $('body').css('overflow', 'hidden');
        }


        //Анимация верхнего блока nav
        $("a[href='#price']").on('click', function () {
            $('.menu').removeClass('menu_active');
            $('body').css('overflow', 'visible');
            $('html, body').animate({
                scrollTop: $("#price").offset().top
            }, TimeScrolling, 'swing');


        });


        $("a[href='#carfleet']").on('click', function () {
            $('.menu').removeClass('menu_active');
            $('body').css('overflow', 'visible');
            $('html, body').animate({
                scrollTop: $("#carfleet").offset().top
            }, TimeScrolling, 'swing');
        });


        $("a[href='#reviews']").on('click', function () {
            $('.menu').removeClass('menu_active');
            $('body').css('overflow', 'visible');
            $('html, body').animate({
                scrollTop: $("#reviews").offset().top
            }, TimeScrolling, 'swing');


        });


        $("a[href='#Contact']").on('click', function () {
            $('.menu').removeClass('menu_active');
            $('body').css('overflow', 'visible');
            $('html, body').animate({
                scrollTop: $("#Contact").offset().top
            }, TimeScrolling, 'swing');


        });
    });


    $(window).on('resize', function () {
        var width = $(window).width();
        var menu_act = $('.menu').hasClass('menu_active');
        if (width > 767) {
            $('body').css('overflow', 'visible');
        }
        if (width < 767 && menu_act) {
            console.log('s');
            $('.menu').removeClass('menu_active');
            $('body').css('overflow', 'visible');
        }
    });






    //СЛАЙДЕР
    var slideNow = 1;
    var slideMax = $('.sliderwprapper').children().length;
    let slideTime = 1000;
    let intervalID = setInterval(slideNext, slideTime);


    $('.viewport').on('mouseenter', function (e) {
        clearInterval(intervalID);
        console.log(intervalID);
    });
    $('.viewport').on('mouseleave', function (e) {
        intervalID = setInterval(slideNext, slideTime);
        console.log(intervalID);
    });

    // setInterval(slideNext, slideTime);


    function slideNext() {
        if (slideNow == slideMax || slideNow <= 0 || slideNow > slideMax) {
            $('.sliderwprapper').css({
                'transform': 'translate(0, 0)'
            });
            slideNow = 1;
        } else {
            var translateWidth = -$('.viewport').width() * (slideNow);
            $('.sliderwprapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)'
            });
            slideNow++;
        }
    };

    function slidePrev() {
        if (slideNow == 1 || slideNow <= 0 || slideNow > slideMax) {
            var translateWidth = -$('.viewport').width() * (slideMax - 1);
            $('.sliderwprapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                'transform': 'translate(' + translateWidth + 'px, 0)'

            });
            slideNow = slideMax;
        } else {
            var translateWidth = -$('.viewport').width() * (slideNow - 2);
            $('.sliderwprapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                'transform': 'translate(' + translateWidth + 'px, 0)'
            });
            slideNow--;
        }
    };


    $('.btn-prev').on('click', slidePrev);
    $('.btn-next').on('click', slideNext);


    $('.slide-nav').on('click', function (event) {
        $('.slide-nav').removeClass('active');

    })


    $('.map_movee').on('click', function () {
        $('.media_map_div').css('display', 'none');
    })

    //КОНЕЦ СЛАЙДЕРА
    //ТАБ СЛАЙДЕРА

    var link = $("a.tab");
    console.log(link);
    link.on('click', function (e) {
        e.preventDefault();
        // $('.tab_content').removeClass('tab_active');
        // $('.tab_content[data-number=' + $(this).attr('data-number') + ']').toggleClass('tab_active');
    });

    //КОНЕЦ ТАБОВ

});
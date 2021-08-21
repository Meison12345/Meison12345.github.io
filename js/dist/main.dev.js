'use strict';

$(function () {
  //     var slideNow = 1;
  //     var slideMax = $('.slider_img ul li').length;
  //     let slideTime = 500;
  //     var wrapper = $('.slider-wrapper');
  //     var sledewrapper = $('.sledewrapper li');
  //     var wrapper = $('.slider-wrapper');
  // function slideNext() {
  //     if(slideNow < 1 || slideNow >= slideMax){
  //         sledewrapper.css('transform: translate', '20px 1000px')
  //     }
  // }
  $('.contact_label input').on('change', function () {
    if (!$(this).is(':checked')) {
      console.log('sd');
      setInterval(function () {
        $(this).css('border', '1px solid red');
      }, 500);
    } else {
      $(".contact_label").css('outline', 'none');
    }
  });
});
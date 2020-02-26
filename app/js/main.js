$(function(){



$('.product__slider-inner').slick({
   arrows: false,
   dots:true,
   slidesToShow: 4,
   slidesToScroll: 4

});
 
$(".js-range-slider").ionRangeSlider({
   type: "double",
   min: 0,
   max: 1000,
   from: 0,
   to: 600
});



$(".rate__star").rateYo({
 rating: 5,
 starWidth: "12px", 
 readOnly: true

});
$('.icon-th-list').on('click', function () {
   $('.products__item').addClass('list');
   $('.products__item').addClass('active')
});
 
$('.icon-th-large').on('click', function () {
   $('.products__item').removeClass('list')
   $('.products__item').removeClass('active'); 
});
 
var mixer = mixitup('.products__inner-box');
});
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

$('.product__one-tabs .tab, .tabs-settings .tab').on('click', function(event) {
   var id = $(this).attr('data-id');
      $('.product__one-tabs, .tabs-settings').find('.tab-item').removeClass('active-tab').hide();
      $('.product__one-tabs .tabs, .tabs-settings .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#'+id).addClass('active-tab').fadeIn();
      return false;
   });

$('.icon-th-large').on('click', function () {
   $('.products__item').removeClass('list')
   $('.products__item').removeClass('active'); 
});
 $('.menu__btn').on('click', function() {
    $('.menu__list').slideToggle();
 });
 $('.header__btn-menu').on('click', function() {
    $('.header__box').toggleClass('active');
 });

var mixer = mixitup('.products__inner-box');
});
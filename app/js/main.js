$(function(){
 var mixer = mixitup('.products__inner-box');
 $(".rate__star").rateYo({
  rating: 5,
  starWidth: "12px", 
  readOnly: true
 
});
$('.product__slider-inner').slick({
   arrows: false,
   dots:true,
   slidesToShow: 4,
   slidesToScroll: 4

}); 
});
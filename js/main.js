$(document).ready(function(){
  $('.slider').slick({
  	autoplay: true,
  	dots: true,
  	prevArrow: $(".slider__btn_back"),
    nextArrow: $(".slider__btn_forward"),
  	responsive: [
    {
      breakpoint: 1280,
      settings: {
        dots: false
      }
    }
  ]
  });
});
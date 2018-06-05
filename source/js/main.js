$(document).ready(function(){
  $('.page-intro__carousel').slick({
      arrows: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: false,
      appendArrows: '.page-intro__controls'
  });
});
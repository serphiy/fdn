$(document).ready(function(){
  $('.page-intro__carousel').on('init', function(event, slick){
      $('.page-intro__current-number').text(parseInt(slick.currentSlide + 1).toString().padStart(2, "0"));
      $('.page-intro__total-number').text('/' + slick.slideCount.toString().padStart(2, "0"));
  });

  $('.page-intro__carousel').on('afterChange', function(event, slick, currentSlide){
      $('.page-intro__current-number').text(parseInt(slick.currentSlide + 1).toString().padStart(2, "0"));
      $('.page-intro__total-number').text('/' + slick.slideCount.toString().padStart(2, "0"));
  });
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
$(document).ready(function(){
  // page-intro carousel
  $('.page-intro__carousel').on('init', function(event, slick){
    var carouselControls = $('.page-intro__controls');
    carouselControls.find('.carousel-numbers__current-number')
                    .text(parseInt(slick.currentSlide + 1).toString().padStart(2, "0"));
    carouselControls.find('.carousel-numbers__total-number')
                    .text('/' + slick.slideCount.toString().padStart(2, "0"));
  });

  $('.page-intro__carousel').on('afterChange', function(event, slick, currentSlide){
    var carouselControls = $('.page-intro__controls');
    carouselControls.find('.carousel-numbers__current-number')
                    .text(parseInt(slick.currentSlide + 1).toString().padStart(2, "0"));
    carouselControls.find('.carousel-numbers__total-number')
                    .text('/' + slick.slideCount.toString().padStart(2, "0"));
  });
  $('.page-intro__carousel').slick({
      arrows: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      appendArrows: $('.page-intro__controls').find('.carousel-controls')
  });

  // services carousel
  $('.services-carousel').on('init', function(event, slick){
    var carouselControls = $('.services-controls');
    carouselControls.find('.carousel-numbers__current-number')
                    .text(parseInt(slick.currentSlide + 1).toString().padStart(2, "0"));
    carouselControls.find('.carousel-numbers__total-number')
                    .text('/' + slick.slideCount.toString().padStart(2, "0"));
  });

  $('.services-carousel').on('afterChange', function(event, slick, currentSlide){
    var carouselControls = $('.services-controls');
    carouselControls.find('.carousel-numbers__current-number')
                    .text(parseInt(slick.currentSlide + 1).toString().padStart(2, "0"));
    carouselControls.find('.carousel-numbers__total-number')
                    .text('/' + slick.slideCount.toString().padStart(2, "0"));
  });
  $('.services-carousel').slick({
      arrows: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      appendArrows: $('.services-controls').find('.carousel-controls')
  });

  // portfolio carousel
  $('.page-portfolio__carousel').on('init', function(event, slick){
    var carouselControls = $('.page-portfolio__controls');
    carouselControls.find('.carousel-numbers__current-number')
                    .text(parseInt(slick.currentSlide + 1).toString().padStart(2, "0"));
    carouselControls.find('.carousel-numbers__total-number')
                    .text('/' + slick.slideCount.toString().padStart(2, "0"));
  });

  $('.page-portfolio__carousel').on('afterChange', function(event, slick, currentSlide){
    var carouselControls = $('.page-portfolio__controls');
    carouselControls.find('.carousel-numbers__current-number')
                    .text(parseInt(slick.currentSlide + 1).toString().padStart(2, "0"));
    carouselControls.find('.carousel-numbers__total-number')
                    .text('/' + slick.slideCount.toString().padStart(2, "0"));
  });
  $('.page-portfolio__carousel').slick({
      arrows: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      appendArrows: $('.page-portfolio__controls').find('.carousel-controls')
  });
});
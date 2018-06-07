$(document).ready(function(){
  // carousels
  var carouselSelectors = {
    '.page-intro__carousel':      '.page-intro__controls',
    '.services-carousel':         '.services-controls',
    '.page-portfolio__carousel':  '.page-portfolio__controls'
  };

  function findControls(event, carouselSelectors) {
    var carouselControls = null;
      for (var selector in carouselSelectors) {
        if ($(event.target).hasClass(selector.slice(1))) {
          carouselControls = $(carouselSelectors[selector]);
          break;
        }
      }
    return carouselControls;
  }

  for (var carousel in carouselSelectors) {
    $(carousel).on('init', function(event, slick){
      var carouselControls = findControls(event, carouselSelectors);
      carouselControls.find('.carousel-numbers__current-number')
                      .text(('00' + parseInt(slick.currentSlide + 1)).slice(-2));
      carouselControls.find('.carousel-numbers__total-number')
                      .text('/' + ('00' + slick.slideCount).slice(-2));
    });

    $(carousel).on('afterChange', function(event, slick, currentSlide){
      var carouselControls = findControls(event, carouselSelectors);
      carouselControls.find('.carousel-numbers__current-number')
                      .text(('00' + parseInt(slick.currentSlide + 1)).slice(-2));
      carouselControls.find('.carousel-numbers__total-number')
                      .text('/' + ('00' + slick.slideCount).slice(-2));
    });

    $(carousel).slick({
        arrows: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: false,
        appendArrows: $(carouselSelectors[carousel]).find('.carousel-controls')
    });
  }
});
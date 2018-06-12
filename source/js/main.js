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
        adaptiveHeight: true,
        appendArrows: $(carouselSelectors[carousel]).find('.carousel-controls')
    });
  }

  // news carousel
  $('.news-carousel').slick({
      arrows: false,
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: false,
      appendDots: $('.page-news')
  });

  // pagination
  function pagination(blockSelector, lineHeight, linesNumber) {
    if($(window).innerWidth() < 620) return;
    var blocks = $(blockSelector).each(function(index, value) {
      $(value).css('position', 'relative');
      $(value).contents().wrapAll('<div class="pagination-content"></div>');
      var content = $(value).find('.pagination-content');
      var contentTotalHeight = content.height();
      contentViewHeight = lineHeight * linesNumber;
      content.css('overflow', 'hidden')
             .height(contentViewHeight)
             .after('<div class="pagination-controls"></div>');
      var emptyContentSpace = contentViewHeight - (contentTotalHeight % contentViewHeight);
      if (emptyContentSpace + lineHeight < contentViewHeight) {
        content.append('<div style="height:' + emptyContentSpace + 'px"></div>');
        contentTotalHeight += emptyContentSpace;
      }
      var control = $(value).find('.pagination-controls')
                            .css({'height':   '30px',
                                  'position': 'absolute',
                                  'bottom':   '0',
                                  'left':     '0',
                                  'right':    '0'
                                });

      var contentPages = Math.round(contentTotalHeight / contentViewHeight);
      if (contentPages > 1) {
        for (var i = 0; i < contentPages; i++) {
          control.append('<button class="pagination-button"></button>');
        }
        var buttons = $(value).find('.pagination-button');
        buttons.css({
                      'border': 'none',
                      'width':  '27px',
                      'height': '5px',
                      'background-color': '#353535',
                      'cursor': 'pointer',
                      'margin': '5px 5px 20px 5px',
                      'opacity': '0.5'
                    });
        $(buttons[0]).css('opacity', '1');
        buttons.on('click', function (e) {
          var buttonInd = buttons.index(e.target);
          content.scrollTop(buttonInd * contentViewHeight);
          buttons.css('opacity', '0.5');
          $(buttons[buttonInd]).css('opacity', '1');
        });
      }
    });
  }
  pagination('.review-card', 22, 10);
  pagination('.portfolio-slide__desc', 22, 14);
});
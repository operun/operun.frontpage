if (window.jQuery) {
  define('jquery', [], function() {
    return window.jQuery;
  });
}

require([
  'jquery',
  'carouFredSel',
], function($) {
  'use strict';

  $('.frontpage-news').each(function() {
    var highest = 0;
    $('.js-height').each(function() {
      if ($(this).height() > highest) {
        highest = $(this).height();
      }
    });
    $('.js-height').height(highest);
  });
    
});

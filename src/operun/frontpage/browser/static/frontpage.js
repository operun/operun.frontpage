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

  // Custom variables

  $(document).ready(function() {
    var elementHeights = $('.news-wrapper').map(function() {
      return $(this).height();
    }).get();

    var maxHeight = Math.max.apply(null, elementHeights);
    
    $('.news-wrapper').height(maxHeight);
  });

});

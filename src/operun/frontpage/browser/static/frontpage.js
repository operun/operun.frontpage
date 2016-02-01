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

  $(document).ready(function() {
    $('.frontpage-news').each(function() {
      var highest = 0;
      $(window).on("resize", function() {
        $('.js-height').each(function() {
          if ($(this).height() > highest) {
            highest = $(this).height();
          }
        });
        $('.js-height').height(highest);
      });
    });
  });

});

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

    $('.frontpage-news').each(function() {

      var highestBox = 0;
      $('.js-height', this).each(function() {

        if ($(this).height() > highestBox)
          highestBox = $(this).height();
      });

      $('.js-height', this).height(highestBox);

    });
  });
});

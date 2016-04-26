if (window.jQuery) {
  define('jquery', [], function() {
    return window.jQuery;
  });
}

require([
  'jquery',
  'caroufredsel',
  'colequalizer',
], function($) {
  'use strict';

  $(function() {
    $('#frontpage-teaser').hover(function() {
      $('.navigation').fadeIn();
      $(".pager a").fadeIn().css("display", "inline-block");
    }, function() {
      $('.navigation, .pager a').fadeOut();
    });
  });

});

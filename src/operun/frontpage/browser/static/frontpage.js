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

  // Enter Content Here
  $(document).ready(function() {
    // Using Default Configuration
    $('#carousel').carouFredSel();

    // Using Custom Configuration
    $('#carousel').carouFredSel({
      items: 2,
      direction: "up",
      scroll: {
        items: 1,
        easing: "elastic",
        duration: 1000,
        pauseOnHover: true
      }
    });
  });
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
   $('.page-scroll a').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $($anchor.attr('href')).offset().top - 60
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
   });
});


// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
   $(".page-scroll a").bind("click", function(event) {
      var $anchor = $(this);
      var vOffset = 60;
      if($anchor.attr("href") == "#page-top")
         vOffset = 80;
      $("html, body").stop().animate({
         scrollTop: $($anchor.attr("href")).offset().top - vOffset
      }, 400, "easeInOutExpo");
      event.preventDefault();
   });
});

$( document ).ready(function() {
   var wlh = window.location.hash;
   
   wlh = wlh.substr(1, wlh.length)
   
   if(wlh.length > 0) {
      $("#href-" + wlh).click();
   }
   
   window.location.hash = "";
});
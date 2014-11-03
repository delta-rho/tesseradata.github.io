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

$(document).ready(function() {
  // $("#header-text").animate({ opacity: 0.85 }, 3000);
  
   // if a hash is in the url, simulate a click
   // and don't fade in the header
   var wlh = window.location.hash;
   wlh = wlh.substr(1, wlh.length)   
   if(wlh.length > 0) {
      $("#href-" + wlh).click();
      makeGrid("#header-grid", false);
   } else {
     makeGrid("#header-grid", true);
   }
   
   window.location.hash = "";
   
   
   function resizedw(){
      $(".header-grid-cell").remove();
      makeGrid("#header-grid", false);
   }
   
   var doit;
   window.onresize = function(){
     clearTimeout(doit);
     doit = setTimeout(resizedw, 100);
   };
});
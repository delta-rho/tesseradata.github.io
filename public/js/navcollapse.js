$(document).on("click", ".navbar-collapse.in", function(e) {
   if( $(e.target).is("a") ) {
      $(this).collapse("hide");
   }
});

$(document).on("click", ".navbar-brand", function(e) {
   if( $(e.target).is("a") ) {
      $(".navbar-collapse.in").collapse("hide");
   }
});

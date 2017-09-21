$(document).ready(function(){
  $("#about-link").click(function() {
    $('html, body').animate({
      scrollTop: $("#about").offset().top
    }, 1000, 'easeInOutCubic');
  });
  $("#faqs-link").click(function() {
    $('html, body').animate({
      scrollTop: $("#faqs").offset().top
    }, 1000, 'easeInOutCubic');
  });
});

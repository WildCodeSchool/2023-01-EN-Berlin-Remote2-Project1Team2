$(window).scroll(function() {
  $('.fade-in').each(function() {
      var top_of_element = $(this).offset().top;
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
      var top_of_screen = $(window).scrollTop();

      if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && !$(this).hasClass('is-visible')) {
          $(this).addClass('is-visible');
      }
  });
});

$(document).ready(function () {
  // $('div.toshow').fadeIn(2200);
  $('div.toshow').show(1500);
  // $('div.toshow').slideDown("slow");
});
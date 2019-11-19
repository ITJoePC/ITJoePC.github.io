$(function() {
  $(".mobile-toggler").click(function() {
    $("body").toggleClass("mobile-open");
  });
  $("header .dropdown").click(function(e) {
    e.stopImmediatePropagation();

    $(this)
      .find(".sub-menu")
      .toggle();
  });

  $(".testimonials-texts-slider").slick({
    dots: true,
    arrows: false,
    fade: true
  });

  ScrollReveal().reveal(".sr-animate", { delay: 300 });
});

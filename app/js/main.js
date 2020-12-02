$(function () {

  var containerEl1 = document.querySelector('[data-ref="mix-container--1"]');
  var containerEl2 = document.querySelector('[data-ref="mix-container--2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
})

$(".home-slider__inner").slick({
  dots: true,
  arrows: false,
  fade: true,
})
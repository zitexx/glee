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

$(".filter-price").ionRangeSlider({
  type: "double",
  hide_min_max: true,
  hide_from_to: true,
  onStart: function (data) {
    $('.filter-box__from').text(data.from);
    $('.filter-box__to').text(data.to);
  },
  onChange: function (data) {
    $('.filter-box__from').text(data.from);
    $('.filter-box__to').text(data.to);
  },
});


$(".star").rateYo({
  starWidth: "12px",
  normalFill: "#d6d6d6",
  ratedFill: "#ffcc00",
  readOnly: true,
  spacing: "6px",
  starSvg: "<svg xmlns=\"http: //www.w3.org/2000/svg\"" +
    "viewBox=\"0 0 24 24\"" +
    "xml:space=\"preserve\">" +
    "<path " +
    "d=\"M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z\"/>" +
    "</svg>",
});
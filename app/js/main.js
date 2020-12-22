$(function () {


  $('.product-related__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
  })

  $('.tabs-header__link').on('click', function (e) {
    e.preventDefault() //удаление стандартного действия по ссылке
    $('.tabs-header__link').removeClass('tabs-header__link--active')
    $(this).addClass('tabs-header__link--active')

    $('.tabs-content__item').removeClass('tabs-content__item--active')
    $($(this).attr('href')).addClass('tabs-content__item--active')
  })


  $('.product-gallery__preview').slick({
    asNavFor: '.product-gallery__list',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
  })
  $('.product-gallery__list').slick({
    asNavFor: '.product-gallery__preview',
    draggable: false,
    arrows: false,
    fade: true,
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

  $(".star2").rateYo({
    starWidth: "17px",
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

  $('.product-cart__amount').styler();


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
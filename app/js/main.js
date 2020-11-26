$(function () {
  $(".slider__inner").slick({
    dots: true,
    arrows: false,
    fade: true,
  })

  $('.gallery__product-item').on('hover', function () {
    $('.gallery__product-btn').addClass('btn__circle btn--active')
  })

})
$(function(){

  $('.details-tabs__title').on('click', function(e){
    e.preventDefault();
    $('.details-tabs__title').removeClass('details-tabs__title--active');
    $(this).addClass('details-tabs__title--active');

    $('.details-tabs__content-item').removeClass('details-tabs__content-item--active');
    $($(this).attr('href')).addClass('details-tabs__content-item--active');

  });

  // $('input, select').styler();
  $('.select-style, .details-item__content-input').styler();

  $('.product-content__filter-btn').on('click', function () {
    $('.product-content__filter-btn').removeClass('product-content__filter-btn--active');
    $(this).addClass('product-content__filter-btn--active');
  });

  $('.button-list').on ('click', function (){
    $('.products-week__inner').addClass ('products-week__inner--list');
    $('.products-week__item').addClass ('products-week__item--list')
  });

  $('.button-grid').on ('click', function (){
    $('.products-week__inner').removeClass ('products-week__inner--list');
    $('.products-week__item').removeClass ('products-week__item--list')
  });



  $(".star").rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true
  });


  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
    fade: true,
    // autoplay: true,
    infinite: true,
    // speed: 300,
    autoplaySpeed: 2000
  });

  $('.details-slide__thumb').slick({
    asNavFor: '.details-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });

  $('.details-slide__big').slick({
    asNavFor: '.details-slide__thumb',
    draggable: false ,
    arrows: false,
    fade: true
  });

  $('.details-products__inner').slick({
    slidesToShow: 4,
    slidesToScroll: 2
  });



  $('.filter-price__input').ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
  },
});




});

const mobileNavBtn  = document.querySelector('.header__mobile-btn');
const mobileNavLine = document.querySelector('.header__mobile-line');
let mobileNavList = document.querySelector('.header-mobile__list');
let mobileNavLink = document.querySelector('.header-mobile__list');

mobileNavBtn.addEventListener('click', function(){
  mobileNavLine.classList.toggle('active');
  mobileNavList.classList.toggle('active');
});

mobileNavLink.addEventListener('click', function(){
  mobileNavLine.classList.toggle('active');
  mobileNavList.classList.toggle('active');  
});



// ----------mixitup only end----------

var mixer = mixitup('.products-week__inner');



$(function(){
  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
    fade: true,
    // autoplay: true,
    infinite: true,
    // speed: 300,
    autoplaySpeed: 2000
  })








  

});

const mobileNavBtn = document.querySelector('.header__mobile-btn');
const mobileNavLine = document.querySelector('.header__mobile-line');
const mobileNavList = document.querySelector('.header-mobile__list');

mobileNavBtn.addEventListener('click', function(){
  mobileNavLine.classList.toggle('active');
  mobileNavList.classList.toggle('active');
})

// ----------mixitup only end----------

var mixer = mixitup('.design__inner');
var mixer = mixitup('.products-week__inner');



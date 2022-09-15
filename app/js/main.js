// "use strict";
// window.addEventListener("DOMContentLoaded", () => {
$(function () {
  $(".blog-body__slider").slick({
    prevArrow:
      '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="15px" height="30px" viewBox="0 0 15 30" version="1.1"><g><path style=" stroke:none;fill-rule:nonzero;fill:rgb(255%,255%,255%);fill-opacity:1;" d="M 11.25 26.25 C 10.769531 26.25 10.289062 26.066406 9.925781 25.699219 L 0.550781 16.324219 C -0.183594 15.59375 -0.183594 14.40625 0.550781 13.675781 L 9.925781 4.300781 C 10.65625 3.566406 11.84375 3.566406 12.574219 4.300781 C 13.308594 5.03125 13.308594 6.21875 12.574219 6.949219 L 4.527344 15 L 12.578125 23.050781 C 13.308594 23.78125 13.308594 24.96875 12.578125 25.703125 C 12.210938 26.070312 11.730469 26.25 11.25 26.25 Z M 11.25 26.25 "/></g></svg></button>',
    nextArrow:
      '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="15px" height="30px" viewBox="0 0 15 30" version="1.1"><g><path style=" stroke:none;fill-rule:nonzero;fill:rgb(255%,255%,255%);fill-opacity:1;" d="M 3.75 26.25 C 3.269531 26.25 2.789062 26.066406 2.425781 25.699219 C 1.691406 24.96875 1.691406 23.78125 2.425781 23.050781 L 10.476562 15 L 2.425781 6.949219 C 1.691406 6.21875 1.691406 5.03125 2.425781 4.296875 C 3.15625 3.566406 4.34375 3.566406 5.074219 4.296875 L 14.449219 13.671875 C 15.183594 14.40625 15.183594 15.59375 14.449219 16.324219 L 5.074219 25.699219 C 4.710938 26.070312 4.230469 26.25 3.75 26.25 Z M 3.75 26.25 "/></g></svg></button>',
  });

  // ==================Tabs Product-detailes--START================

  // --------******* this jQuery *****-----------
  // $('.details-tabs__title').on('click', function(e){
  //   e.preventDefault();
  //   $('.details-tabs__title').removeClass('details-tabs__title--active');
  //   $(this).addClass('details-tabs__title--active');

  //   $('.details-tabs__content-item').removeClass('details-tabs__content-item--active');
  //   $($(this).attr('href')).addClass('details-tabs__content-item--active');

  // });  

  // ====================Tabs Product-detailes--Finish===============



// ===Plagin styler for select=====start===============================
  $(".select-style, .details-item__content-input").styler();

  $(".product-content__filter-btn").on("click", function () {
    $(".product-content__filter-btn").removeClass(
      "product-content__filter-btn--active"
    );
    $(this).addClass("product-content__filter-btn--active");
  });

  $(".button-list").on("click", function () {
    $(".products-week__inner").addClass("products-week__inner--list");
    $(".products-week__item").addClass("products-week__item--list");
  });

  $(".button-grid").on("click", function () {
    $(".products-week__inner").removeClass("products-week__inner--list");
    $(".products-week__item").removeClass("products-week__item--list");
  });
  // ===Plagin styler for select=====finish============================

  $(".star").rateYo({
    starWidth: "12px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    // star original downloaded icon-star
  });

  $(".top-slider__inner").slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    infinite: true,
    speed: 300,
    // autoplaySpeed: 2000
  });

  $(".details-slide__thumb").slick({
    asNavFor: ".details-slide__big",
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
  });

  $(".details-slide__big").slick({
    asNavFor: ".details-slide__thumb",
    draggable: false,
    arrows: false,
    fade: true,
  });

  $(".details-products__inner").slick({
    slidesToShow: 4,
    slidesToScroll: 2,
  });

  $(".filter-price__input").ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $(".filter-price__from").text(data.from);
      $(".filter-price__to").text(data.to);
    },
    onChange: function (data) {
      $(".filter-price__from").text(data.from);
      $(".filter-price__to").text(data.to);
    },
  });
});

// ======start mixitup===================================================
// var mixer = mixitup('.products-week__inner');

// -------Пришлось скрипт обернуть в оператор if----------------

// var containerEl = document.querySelector(".products-week__inner");
// var mixer;

// if (containerEl) {
//   mixer = mixitup(".products-week__inner");
// }
// ======finish mixitup===================================================

// ----Mobile Button start------------------------
  const mobileNavBtn = document.querySelector(".header__mobile-btn");
  const mobileNavLine = document.querySelector(".header__mobile-line");
  let mobileNavList = document.querySelector(".header-mobile__list");
  let filterSelect = document.querySelector('.product-content__filter-selects');

  mobileNavBtn.addEventListener("click", function () {
    document.body.classList.toggle('no-scroll');
    mobileNavLine.classList.toggle("active");
    mobileNavList.classList.toggle("active");
  });
  
  mobileNavList.addEventListener("click", function () {
    document.body.classList.toggle('no-scroll');
    mobileNavLine.classList.toggle("active");
    mobileNavList.classList.toggle("active");
  });
  // ----Mobile Button finish------------------------
  const productFilter = document.querySelector('.filter');
  const filterBtn = document.querySelector('.product__filter-btn');

  filterBtn.addEventListener('click', function() {
    productFilter.classList.toggle('block');
    document.body.classList.toggle('no-scroll');
  });

  // ====Filer start==================================================


  // ====Filer finish==================================================





  // -----***--this Tabs native JS--start***-----------------
  // const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
  //   const header = document.querySelector(headerSelector),
  //         tab = document.querySelectorAll(tabSelector),
  //         content = document.querySelectorAll(contentSelector);
  
  //     function hideContent () {
  //       content.forEach(item => {
  //         item.style.display = 'none';
  //       });
  
  //       tab.forEach(item => {
  //         item.classList.remove(activeClass);
  //       });
  //     };
  
  //     function showContent (i = 2) {
  //       content[i].style.display = 'block'; 
  //       tab[i].classList.add(activeClass);  
  //     }
  
  //     hideContent();
  //     showContent();
  
  //     header.addEventListener('click', (e) => {
  //       e.preventDefault();
  //       const target = e.target;
  //       if (target &&
  //         (target.classList.contains(tabSelector.replace(/\./, '')) || 
  //       target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
  //         tab.forEach((item, i) => {
  //           if (target == item || target.parentNode === item) {
  //             hideContent();
  //             showContent(i);
  //           }
  //         });
  //       }
  //     });
  // };
  
  // tabs('.details-tabs__top', '.details-tabs__title', '.details-tabs__content-item', 'details-tabs__title--active');
   // -----***--this Tabs native JS--finish***-----------------


    // --start----actual date start-------------

  // let today = new Date();

  // let date =
  //   today.getDate() +
  //   ". " +
  //   ("0" + (new Date().getMonth() + 1)).slice(-2) +
  //   ". " +
  //   today.getFullYear();
  // let date1 =
  //   today.getDate() -
  //   2 +
  //   ". " +
  //   ("0" + (new Date().getMonth() + 0)).slice(-2) +
  //   ". " +
  //   today.getFullYear();
  // let date2 =
  //   today.getDate() -
  //   4 +
  //   ". " +
  //   ("0" + (new Date().getMonth() - 1)).slice(-2) +
  //   ". " +
  //   today.getFullYear();
  // let date3 =
  //   today.getDate() +
  //   ". " +
  //   ("0" + (new Date().getMonth() - 2)).slice(-2) +
  //   ". " +
  //   today.getFullYear();

  // document.getElementById("current_date").innerText = date;
  // document.getElementById("current_date1").innerText = date1;
  // document.getElementById("current_date2").innerText = date2;
  // document.getElementById("current_date3").innerText = date3;

  // document.getElementById("current_date-aside").innerText = date;
  // document.getElementById("current_date-aside1").innerText = date1;
  // document.getElementById("current_date-aside2").innerText = date2;
  // document.getElementById("current_date-aside3").innerText = date3;

  // --finish --actual date -------------

  // =======Time ==start=========================================================

  // let today = new Date();

  // let date = today.getDate()+'. '+("0" + ((new Date()).getMonth()+1)).slice(-2)+'. '+today.getFullYear();
  // let date1 = (today.getDate()-6)+'. '+("0" + ((new Date()).getMonth()+0)).slice(-2)+'. '+today.getFullYear();
  // let date2 = (today.getDate()-3)+'. '+("0" + ((new Date()).getMonth()-1)).slice(-2)+'. '+today.getFullYear();
  // let date3 = today.getDate()+'. '+("0" + ((new Date()).getMonth()-2)).slice(-2)+'. '+today.getFullYear();

  // $('.tabs-comments__date')[0].innerText = date;
  // $('.tabs-comments__date')[1].innerText = date1;
  // $('.tabs-comments__date')[2].innerText = date2;
  // $('.tabs-comments__date')[3].innerText = date3;

  // =======Time ==finish=========================================================

  // document.getElementById("comments__date").innerText = date;
  // document.getElementById("comments__date1").innerText = date1;
  // document.getElementById("comments__date2").innerText = date2;

  // https://javascript.ru/forum/misc/65647-vyvod-nazvaniya-mesyaca.html  вывод названия месяца??

// });


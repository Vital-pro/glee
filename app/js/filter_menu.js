const productFilter = document.querySelector('.filter');
const filterInnerListBtnAdaptive = document.querySelector('.product__inner-filter-btn');
const filterPriceBtn = document.querySelector('.filter-price__btn');
const filterCategoryCheckbox = document.querySelectorAll('.filter-category__checkbox');
const filterBrandCheckbox = document.querySelectorAll('.filter-brand__checkbox');

filterInnerListBtnAdaptive.addEventListener('click', function() {
  productFilter.classList.toggle('block');
  document.body.classList.toggle('no-scroll');
});

filterPriceBtn.addEventListener('click', function() {
  productFilter.classList.toggle('block');
  document.body.classList.toggle('no-scroll');
  filterCategoryCheckbox.forEach((e) => {
    e.style.backgroundColor="#fff";
  });
  filterBrandCheckbox.forEach((e) => {
    e.style.backgroundColor="#fff";
  });
});
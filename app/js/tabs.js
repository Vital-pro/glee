  document.addEventListener('DOMContentLoaded', function() {
  const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);
  
      function hideContent () {
        content.forEach(item => {
          item.style.display = 'none';
        });
  
        tab.forEach(item => {
          item.classList.remove(activeClass);
        });
      };
  
      function showContent (i = 2) {
        content[i].style.display = 'block'; 
        tab[i].classList.add(activeClass);  
      }
  
      hideContent();
      showContent();
  
      header.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;
        if (target &&
          (target.classList.contains(tabSelector.replace(/\./, '')) || 
        target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
          tab.forEach((item, i) => {
            if (target == item || target.parentNode === item) {
              hideContent();
              showContent(i);
            }
          });
        }
      });
  };
  
  tabs('.details-tabs__top', '.details-tabs__title', '.details-tabs__content-item', 'details-tabs__title--active');

});
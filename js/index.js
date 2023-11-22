// Burger menu

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click', 
function() {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach(function (element) {
    element.addEventListener('click', function() {

        burger.classList.remove('burger--active');

        menu.classList.remove('header__nav--active');

        document.body.classList.remove('stop-scroll');
    })
});

// Swiper

let swiper = new Swiper('.swiper__container', {
    loop: true,
    autoplay: {
        delay: 6000,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    a11y: {
        containerMessage: 'Слайдер',
        firstSlideMessage: 'Первый слайд',
        paginationBulletMessage: 'Перейти к слайду {{index}}'
      }
  });

// Accordion

new Accordion('.accordion-list', {
    elementClass: 'accordion',
    triggerClass: 'accordion__control',
    panelClass: 'accordion__content',
    activeClass: 'accordion--active'
});

// Tabs

let tabsBtn = document.querySelectorAll('.work__btn');
let tabsItem = document.querySelectorAll('.tab-content');

tabsBtn.forEach(function(el) {
    el.addEventListener('click', function(e){
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function(btn){btn.classList.remove('work__btn--active')});
        e.currentTarget.classList.add('work__btn--active');

        tabsItem.forEach(function(el){el.classList.remove('tab-content--active')});
        document.querySelector(`[data-target="${path}"]`).classList.add('tab-content--active');
    });
}); 

const searchBtn = document.querySelector('.search-btn');
const closeBtn = document.querySelector('.close-btn');
const searchWrapper = document.querySelector('.search__wrapper');
const searchBox = document.querySelector('.search-box');
const searchInput = document.querySelector('.search-text');
const line = document.querySelector('.line');

searchBtn.onclick = () => {
    searchWrapper.classList.add('active');
    searchBox.classList.add('active');
    searchInput.classList.add('active');
    closeBtn.classList.add('active');
    line.classList.add('active');
}

closeBtn.onclick = () => {
    searchWrapper.classList.remove('active');
    searchBox.classList.remove('active');
    searchInput.classList.remove('active');
    closeBtn.classList.remove('active');
    line.classList.remove('active');
}

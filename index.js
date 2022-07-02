
const buttonNav = document.querySelector('.mobile-nav-toggle');
const primaryNavigation = document.querySelector('.primary-nav');
const theBody = document.querySelector('body');
const coverPage = document.querySelector('.cover-page');

buttonNav.addEventListener('click', () => {
    buttonNav.classList.toggle('mobile-nav-close');
    primaryNavigation.classList.toggle('primary-nav-visible');
    coverPage.classList.toggle('cover-page-darked');
});

//
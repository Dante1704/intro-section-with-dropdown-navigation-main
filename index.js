
//Whenever the Hamburger button is clicked, it shows or hides the primary nav.
const buttonNav = document.querySelector('.mobile-nav-toggle');
const primaryNavigation = document.querySelector('.primary-nav');
const theBody = document.querySelector('body');
const coverPage = document.querySelector('.cover-page');

buttonNav.addEventListener('click', () => {
    buttonNav.classList.toggle('mobile-nav-close');
    primaryNavigation.classList.toggle('primary-nav-visible');
    coverPage.classList.toggle('cover-page-darked');
});

//Whenever "features" or "company" is clicked, each shows or hides its secondary nav.
const linkFeatures = document.querySelector('.features');
const linkCompany = document.querySelector('.company');
const secondaryNav1 = document.querySelector('.secondary-nav-1');
const secondaryNav2 = document.querySelector('.secondary-nav-2');
const arrow1 = document.querySelector('.arrow-1');
const arrow2 = document.querySelector('.arrow-2');

const toggleSecondaryNav = (anchorTag, nav, arrow) => {
    anchorTag.addEventListener('click', () => {
        nav.classList.toggle('secondary-nav-expanded');
        arrow.getAttribute('src') === "./images/icon-arrow-down.svg" ?
            arrow.setAttribute('src', "./images/icon-arrow-up.svg") :
            arrow.setAttribute('src', "./images/icon-arrow-down.svg");
    });
}

toggleSecondaryNav(linkFeatures, secondaryNav1, arrow1);
toggleSecondaryNav(linkCompany, secondaryNav2, arrow2);

//If "Login" is clicked,
//it will get .active, and this clase will be disable on "Register".

const login = document.querySelector('.login');
const register = document.querySelector('.register');

login.addEventListener('click', () => {
    login.classList.toggle('active');
    register.classList.toggle('active');
});
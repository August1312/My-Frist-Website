/* Abre e fehca o menu lateral em modo mobile */

const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');


menuMobile.addEventListener('click', () => {
    if ( menuMobile.classList.contains("bi-list")){
        menuMobile.classList.replace("bi-list", "bi-x")
    }
    else {
        menuMobile.classList.replace("bi-x", "bi-list")
    }
    body.classList.toggle("menu-nav-active")
});
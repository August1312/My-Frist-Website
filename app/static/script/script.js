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

/* Fecha o menu quando clicar em algum intem no corpo da site  */

const navItem =document.querySelectorAll('.nav-item');   /* querySelectorAll serve para pega todos os intem com a tag nav-item */

/* para adicionar evento de click em cada intem do nav-item */
navItem.forEach(item => {
    item.addEventListener("click", () =>{
        if (body.classList.contains("menu-nav-active")) {
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list")
        }
    })
})
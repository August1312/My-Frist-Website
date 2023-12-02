/* Abre e fehca o menu lateral em modo mobile */

const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');
const footer = document.querySelector('footer');


menuMobile.addEventListener('click', () => {
    if (menuMobile.classList.contains("bi-list")) {
        menuMobile.classList.replace("bi-list", "bi-x")
    }
    else {
        menuMobile.classList.replace("bi-x", "bi-list")
    }
    body.classList.toggle("menu-nav-active")
    footer.classList.toggle("menu-nav-active")
});


/* Fecha o menu quando clicar em algum intem no corpo da site  */

const navItem = document.querySelectorAll('.nav-item');   /* querySelectorAll serve para pega todos os intem com a tag nav-item */

/* para adicionar evento de click em cada intem do nav-item */
navItem.forEach(item => {
    item.addEventListener("click", () => {
        if (body.classList.contains("menu-nav-active")) {
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list")
        }
    })
})

// animar todos os intens na tela que tiverem meu atributo data-anime // 
const animeScroll = (elements) => {
    const windowTop = window.scrollY + window.innerHeight * 0.85;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top + window.scrollY;

        if (windowTop > elementTop) {
            element.classList.add("animate");
        }
        else {
            element.classList.remove("animate")
        }
    });
};

// Seletor para os elementos desejados
const elementosAnime = document.querySelectorAll("[data-anime]");

animeScroll(elementosAnime);

window.addEventListener("scroll", () => {
    animeScroll(elementosAnime);
});

// tira mensagem depois de 5s

setTimeout(() => {
    document.querySelector('#alerta')
    .styler
    .display = 'none';
}, 5000)
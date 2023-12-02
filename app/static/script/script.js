/* Abre e fehca o menu lateral em modo mobile */

const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');
const footer = document.querySelector('footer');

// Adiciona um ouvinte de evento de clique ao menuMobile
menuMobile.addEventListener('click', () => {
    if (menuMobile.classList.contains("bi-list")) {
        menuMobile.classList.replace("bi-list", "bi-x")
    }
    else {
        menuMobile.classList.replace("bi-x", "bi-list")
    }

    // Adiciona ou remove a classe menu-nav-active no body e footer
    body.classList.toggle("menu-nav-active")
    footer.classList.toggle("menu-nav-active")
});


/* Fecha o menu quando clicar em algum intem no corpo da site  */
const navItem = document.querySelectorAll('.nav-item');

/* para adicionar evento de click em cada intem do nav-item */
navItem.forEach(item => {
    item.addEventListener("click", () => {
        // Remove a classe menu-nav-active do body e altera o ícone do menuMobile para lista
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

        // Adiciona ou remove a classe animate com base na posição do elemento na tela
        if (windowTop > elementTop) {
            element.classList.add("animate");
        }
        else {
            element.classList.remove("animate")
        }
    });
};

// Seletor para os elementos desejados com o atributo data-anime
const elementosAnime = document.querySelectorAll("[data-anime]");

// Inicializa a animação ao carregar a página
animeScroll(elementosAnime);

// Adiciona um ouvinte de evento de rolagem para continuar a animação durante o scroll
window.addEventListener("scroll", () => {
    animeScroll(elementosAnime);
});

// Esconde a mensagem depois de 5 segundos
setTimeout(() => {
    document.querySelector('#alerta')
    .styler
    .display = 'none';
}, 5000)
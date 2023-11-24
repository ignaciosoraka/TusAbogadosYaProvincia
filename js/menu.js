// Agrega esta parte al código JavaScript existente
(function () {
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');
    const navBar = document.querySelector('.nav');

    openButton.addEventListener('click', () => {
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', () => {
        menu.classList.remove('nav__link--show');
    });

    // Cierra el menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav__links');
    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            menu.classList.remove('nav__link--show');
        });
    });

    // Agrega este bloque para hacer la barra de navegación fija al hacer scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > navBar.offsetHeight + 150) {
            navBar.classList.add('fixed-nav');
        } else {
            navBar.classList.remove('fixed-nav');
        }
    });
})();


document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los enlaces en el menú de navegación
    var links = document.querySelectorAll('a[href^="#"]');

    // Añade un event listener a cada enlace
    links.forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            // Obtiene el destino del enlace (la sección a la que se desplazará)
            var targetId = this.getAttribute("href").substring(1);
            var targetElement = document.getElementById(targetId);

            // Usa scrollIntoView con el comportamiento 'smooth'
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
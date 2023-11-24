document.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav');
    const scrollTop = window.scrollY;

    if (scrollTop > 10) {
        nav.classList.add('nav--fixed');
    } else {
        nav.classList.remove('nav--fixed');
    }
});

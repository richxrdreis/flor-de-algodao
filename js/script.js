document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const homeSection = document.querySelector('#home');
    const homeSectionHeight = homeSection.offsetHeight;

    window.addEventListener('scroll', function() {
        if (window.scrollY > homeSectionHeight) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
});
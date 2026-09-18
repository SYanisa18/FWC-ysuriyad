document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const menuToggle = document.getElementById('navbarNav');

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (menuToggle && menuToggle.classList.contains('show')) {
                menuToggle.classList.remove('show');
            }
        });
    });
});
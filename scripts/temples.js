document.addEventListener('DOMContentLoaded', () => {
    let currentYear = new Date().getFullYear();
    let lastModifiedDate = document.lastModified;

    document.querySelector('footer p').innerHTML = `&copy; ${currentYear} | Alberto Becerril | Mexico City <br><br> Last modified: ${lastModifiedDate}`;

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');

    hamburgerMenu.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});

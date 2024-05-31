document.getElementById('about-a').addEventListener('click', function() {
    document.getElementById('about-sec').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('products-a').addEventListener('click', function() {
    document.getElementById('products-sec').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contact-a').addEventListener('click', function() {
    document.getElementById('contact-sec').scrollIntoView({ behavior: 'smooth' });
});
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('js-navbar-toggle');
    const navbarMenu = document.getElementById('js-menu');

    toggleButton.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
    });
});

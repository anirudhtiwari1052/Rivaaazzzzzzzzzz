document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        offset: 150,
    });

    // Highlight active nav link
    const flexOptions = document.querySelectorAll('.flex-option');
    flexOptions.forEach(option => {
        option.addEventListener('click', function() {
            flexOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Toggle nav menu on hamburger click
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
});

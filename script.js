
const images = document.querySelectorAll('#spacex-slideshow .slideshow-image');
let currentImage = 0;

function showNextImage() {
    images[currentImage].classList.remove('active');
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].classList.add('active');
}
setInterval(showNextImage, 2000);
images[0].classList.add('active');


const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
}


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('section').forEach((section, index) => {
        section.style.animationDelay = `${index * 0.3}s`;
    });
});


const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});
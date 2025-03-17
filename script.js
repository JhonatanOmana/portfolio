
document.querySelectorAll('.proyecto').forEach(proyecto => {
    const images = proyecto.querySelectorAll('.slideshow-image');
    const prevBtn = proyecto.querySelector('.prev');
    const nextBtn = proyecto.querySelector('.next');
    let current = 0;
    let interval;

    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
    }

    function nextImage() {
        current = (current + 1) % images.length;
        showImage(current);
    }

    function prevImage() {
        current = (current - 1 + images.length) % images.length;
        showImage(current);
    }

    images[0].classList.add('active');
    interval = setInterval(nextImage, 3000);

    nextBtn.addEventListener('click', () => {
        clearInterval(interval);
        nextImage();
        interval = setInterval(nextImage, 3000);
    });

    prevBtn.addEventListener('click', () => {
        clearInterval(interval);
        prevImage();
        interval = setInterval(nextImage, 3000);
    });
});


const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
}

// Menú hamburguesa
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});
const slides = document.querySelector('.image-s2 .carousel .slides');
const images = document.querySelectorAll('.image-s2 .carousel .slides img');
const prevButton = document.querySelector('.image-s2 .carousel .prev');
const nextButton = document.querySelector('.image-s2 .carousel .next');

const slides2 = document.querySelector('.image-s2_2 .carousel .slides');
const images2 = document.querySelectorAll('.image-s2_2 .carousel .slides img');
const prevButton2 = document.querySelector('.image-s2_2 .carousel .prev');
const nextButton2 = document.querySelector('.image-s2_2 .carousel .next');

let currentIndex = 0;

function showSlide(index) {
    const slideWidth = images[0].clientWidth;
    slides.style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
}

function showSlide2(index) {
    const slideWidth = images2[0].clientWidth;
    slides2.style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide2() {
    currentIndex = (currentIndex + 1) % images2.length;
    showSlide2(currentIndex);
}

function prevSlide2() {
    currentIndex = (currentIndex - 1 + images2.length) % images2.length;
    showSlide2(currentIndex);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
nextButton2.addEventListener('click', nextSlide2);
prevButton2.addEventListener('click', prevSlide2);

// Cambia de imagen automáticamente cada 5 segundos
setInterval(nextSlide, 10000);

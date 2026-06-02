// ==================== CAROUSEL ====================
const slides = document.querySelector('.image-s2 .carousel .slides');
const images = document.querySelectorAll('.image-s2 .carousel .slides img');
const prevButton = document.querySelector('.image-s2 .carousel .prev');
const nextButton = document.querySelector('.image-s2 .carousel .next');

let currentIndex = 0;
let autoplayInterval;

function createIndicators() {
    const carousel = document.querySelector('.image-s2 .carousel');
    const indicatorsContainer = document.createElement('div');
    indicatorsContainer.className = 'carousel-indicators';
    
    images.forEach((img, index) => {
        const indicator = document.createElement('div');
        indicator.className = 'indicator' + (index === 0 ? ' active' : '');
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });
    
    carousel.appendChild(indicatorsContainer);
}

function updateIndicators() {
    const indicators = document.querySelectorAll('.image-s2 .carousel .indicator');
    indicators.forEach((ind, index) => {
        ind.classList.toggle('active', index === currentIndex);
    });
}

function showSlide(index) {
    const slideWidth = images[0].clientWidth;
    slides.style.transform = `translateX(-${index * slideWidth}px)`;
    updateIndicators();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
}

function goToSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
    resetAutoplay();
}

function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 8000);
}

function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
}

// Event listeners
if (nextButton) nextButton.addEventListener('click', nextSlide);
if (prevButton) prevButton.addEventListener('click', prevSlide);

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    createIndicators();
    startAutoplay();
});

// Stop autoplay on user interaction
if (slides) {
    slides.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
    slides.addEventListener('mouseleave', startAutoplay);
}

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

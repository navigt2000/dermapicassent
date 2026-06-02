// ==================== CAROUSEL FUNCTIONALITY ====================

class Carousel {
    constructor() {
        this.slides = document.querySelector('.slides');
        this.prevBtn = document.querySelector('.carousel-btn.prev');
        this.nextBtn = document.querySelector('.carousel-btn.next');
        this.indicatorsContainer = document.querySelector('.carousel-indicators');
        this.images = document.querySelectorAll('.slides img');
        
        this.currentIndex = 0;
        this.autoplayInterval = null;
        
        if (this.slides && this.images.length > 0) {
            this.init();
        }
    }

    init() {
        this.createIndicators();
        this.attachEventListeners();
        this.startAutoplay();
    }

    createIndicators() {
        this.images.forEach((_, index) => {
            const indicator = document.createElement('div');
            if (index === 0) indicator.classList.add('active');
            indicator.addEventListener('click', () => this.goToSlide(index));
            this.indicatorsContainer.appendChild(indicator);
        });
    }

    updateIndicators() {
        const indicators = document.querySelectorAll('.carousel-indicators div');
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentIndex);
        });
    }

    showSlide(index) {
        const slideWidth = this.slides.parentElement.offsetWidth;
        this.slides.style.transform = `translateX(-${index * slideWidth}px)`;
        this.updateIndicators();
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.showSlide(this.currentIndex);
    }

    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.showSlide(this.currentIndex);
    }

    goToSlide(index) {
        this.currentIndex = index;
        this.showSlide(this.currentIndex);
        this.resetAutoplay();
    }

    startAutoplay() {
        this.autoplayInterval = setInterval(() => this.nextSlide(), 6000);
    }

    resetAutoplay() {
        clearInterval(this.autoplayInterval);
        this.startAutoplay();
    }

    attachEventListeners() {
        if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.nextSlide());
        if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prevSlide());
        
        // Pause on hover
        if (this.slides) {
            this.slides.addEventListener('mouseenter', () => clearInterval(this.autoplayInterval));
            this.slides.addEventListener('mouseleave', () => this.startAutoplay());
        }

        // Handle window resize
        window.addEventListener('resize', () => this.showSlide(this.currentIndex));
    }
}

// ==================== SMOOTH SCROLL FOR NAVIGATION ====================

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ==================== NAVBAR SCROLL EFFECT ====================

function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 100) {
            navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
        }

        lastScroll = currentScroll;
    });
}

// ==================== INTERSECTION OBSERVER FOR ANIMATIONS ====================

function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// ==================== ACTIVE NAV LINK ====================

function setupActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.style.color = '#1a1a1a';
            if (link.getAttribute('href').slice(1) === current) {
                link.style.color = '#0066cc';
            }
        });
    });
}

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize carousel
    new Carousel();

    // Setup smooth scroll
    setupSmoothScroll();

    // Setup navbar effects
    setupNavbarScroll();

    // Setup intersection observer for animations
    setupIntersectionObserver();

    // Setup active navigation links
    setupActiveNavLink();

    // Mobile nav toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });

        // Close menu when a link is clicked
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    console.log('DermaPicassent website loaded successfully!');
});

// ==================== UTILITY FUNCTIONS ====================

// Scroll to top button (optional enhancement)
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        // Could show a scroll-to-top button here
    }
});

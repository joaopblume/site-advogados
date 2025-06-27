// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-dot');
const totalSlides = slides.length;

function showSlide(index) {
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current slide and dot
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Auto-advance carousel
setInterval(nextSlide, 5000);

// Arrow navigation
document.querySelector('.carousel-arrow.next').addEventListener('click', nextSlide);
document.querySelector('.carousel-arrow.prev').addEventListener('click', prevSlide);

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header background change on scroll with parallax
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const scrollY = window.scrollY;
    
    if (scrollY > 100) {
        header.style.background = 'rgba(6, 57, 112, 0.98)';
        header.style.backdropFilter = 'blur(20px)';
        header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(6, 57, 112, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
    
    // Call parallax effect
    requestParallax();
});

// Animate cards on scroll with staggered effect
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to cards with staggered delays
document.querySelectorAll('.service-card, .team-card, .article-card, .contact-item').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px)';
    card.style.transition = `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Section titles animation
const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.section-title, .section-subtitle').forEach((title, index) => {
    title.style.opacity = '0';
    title.style.transform = 'translateY(30px)';
    title.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
    titleObserver.observe(title);
});

// Parallax effect for carousel
let ticking = false;

function updateParallax() {
    const scrolled = window.pageYOffset;
    const carousel = document.querySelector('.carousel-container');
    const carouselHeight = carousel.offsetHeight;
    
    if (scrolled <= carouselHeight) {
        const parallaxElements = document.querySelectorAll('.carousel-slide');
        parallaxElements.forEach(element => {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }
    
    ticking = false;
}

function requestParallax() {
    if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
    }
}

// Mobile menu toggle
const createMobileMenu = () => {
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelector('.nav-links');
    const menuButton = document.createElement('button');
    
    menuButton.innerHTML = '☰';
    menuButton.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.8rem;
        display: none;
        cursor: pointer;
        padding: 10px;
    `;

    let isMenuOpen = false;

    menuButton.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.background = 'rgba(6, 57, 112, 0.95)';
            navLinks.style.padding = '20px';
            navLinks.style.backdropFilter = 'blur(15px)';
            menuButton.innerHTML = '✕';
        } else {
            navLinks.style.display = 'none';
            menuButton.innerHTML = '☰';
        }
    });

    nav.appendChild(menuButton);

    // Show/hide menu button based on screen size
    const checkMobile = () => {
        if (window.innerWidth <= 768) {
            menuButton.style.display = 'block';
            navLinks.style.display = 'none';
        } else {
            menuButton.style.display = 'none';
            navLinks.style.display = 'flex';
            navLinks.style.position = 'static';
            navLinks.style.flexDirection = 'row';
            navLinks.style.background = 'none';
            navLinks.style.padding = '0';
            navLinks.style.backdropFilter = 'none';
            isMenuOpen = false;
            menuButton.innerHTML = '☰';
        }
    };

    window.addEventListener('resize', checkMobile);
    checkMobile();
};

createMobileMenu();

// Fix para garantir que o carrossel não interfira nas outras seções
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-container');
    const services = document.querySelector('.services');
    
    if (carousel && services) {
        // Garantir que o carrossel tenha altura fixa
        carousel.style.height = '100vh';
        carousel.style.position = 'relative';
        carousel.style.zIndex = '1';
        
        // Garantir que services tenha posicionamento correto
        services.style.position = 'relative';
        services.style.zIndex = '100';
        services.style.background = '#ffffff';
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
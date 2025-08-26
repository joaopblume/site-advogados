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

// Header background change on scroll
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

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

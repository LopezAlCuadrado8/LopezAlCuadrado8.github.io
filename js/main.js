// ===== Menú móvil =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Cerrar menú al hacer click en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ===== Animaciones al hacer scroll =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll(
        '.project-card, .skill-category, .timeline-item, .contact-card, .about-card'
    );
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// ===== Navbar con efecto al hacer scroll =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// ===== Scroll suave para enlaces internos =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== Año dinámico en el footer =====
const footer = document.querySelector('.footer p');
if (footer) {
    const currentYear = new Date().getFullYear();
    footer.innerHTML = footer.innerHTML.replace('2025', currentYear);
}
// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in animation on scroll
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

// Observe menu items and sections
document.querySelectorAll('.menu-item, .menu-section, .follow').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Add hover effect for menu items (additional enhancement)
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05)';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    } else {
        header.style.backgroundColor = '#000';
    }
});

// Change hero image randomly on each page load
window.addEventListener('DOMContentLoaded', () => {
    const heroImages = [
        'photos/margherita.jpg',
        'photos/pizza 4 fromage.jpg',
        'photos/pizza 4 seqson.jpg',
        'photos/pizza sauce blanche.jpg',
        'photos/poulet.jpg',
        'photos/viande.jpg',
        'photos/marini.jpg',
        'photos/kabab.jpg',
        'photos/viande sandwich.jpg',
        'photos/tacos viande.png',
        'photos/tacos poulet.jpg',
        'photos/tacos mix.jpg'
    ];
    const img = document.getElementById('hero-img');
    if (img) {
        const random = Math.floor(Math.random() * heroImages.length);
        img.src = heroImages[random];
    }
});

// ===== TYPING EFFECT =====
const typedText = document.querySelector('.typed-text');
const words = ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'AI Solutions'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typedText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => isDeleting = true, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    const speed = isDeleting ? 50 : 100;
    setTimeout(typeEffect, speed);
}
typeEffect();

// ===== HAMBURGER MENU =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 15, 0.95)';
        navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.3)';
    } else {
        navbar.style.background = 'rgba(10, 10, 15, 0.85)';
        navbar.style.boxShadow = 'none';
    }
});

// ===== COUNTER ANIMATION =====
const stats = document.querySelectorAll('.stat-number');

const animateCounter = (el) => {
    const target = parseInt(el.dataset.target);
    const increment = target / 60;
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            el.textContent = Math.ceil(current);
            requestAnimationFrame(updateCounter);
        } else {
            el.textContent = target + '+';
        }
    };
    updateCounter();
};

// Intersection Observer for counters
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

stats.forEach(stat => observer.observe(stat));

// ===== SKILLS ANIMATION ON SCROLL =====
const skillBars = document.querySelectorAll('.skill-progress');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 200);
            skillObserver.unobserve(bar);
        }
    });
}, { threshold: 0.3 });

skillBars.forEach(bar => skillObserver.observe(bar));

// ===== FORM SUBMISSION =====
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks for your message! I\'ll get back to you soon.');
    contactForm.reset();
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== PARALLAX EFFECT ON HERO (optional) =====
window.addEventListener('scroll', () => {
    const hero = document.getElementById('hero');
    const scrolled = window.scrollY;
    hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
});

console.log('🚀 AI Portfolio loaded successfully!');
/* ====================================
   Portfolio Template V2 - JavaScript
   ==================================== */

// Initialize AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
});

// Theme toggle removed - replaced with hamburger menu

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetSection.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        
        if (window.pageYOffset >= (sectionTop - navbarHeight - 100)) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.08)';
    }
});

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
const formMessage = document.createElement('div');
formMessage.className = 'mt-3 text-center';
contactForm.appendChild(formMessage);

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        // Reset previous validation states
        nameInput.classList.remove('is-invalid');
        emailInput.classList.remove('is-invalid');
        messageInput.classList.remove('is-invalid');
        formMessage.innerHTML = '';
        formMessage.className = 'mt-3 text-center';
        
        let isValid = true;
        
        // Validate name
        if (!nameInput.value.trim()) {
            nameInput.classList.add('is-invalid');
            isValid = false;
        }
        
        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim() || !emailPattern.test(emailInput.value)) {
            emailInput.classList.add('is-invalid');
            isValid = false;
        }
        
        // Validate message
        if (!messageInput.value.trim()) {
            messageInput.classList.add('is-invalid');
            isValid = false;
        }
        
        if (isValid) {
            formMessage.innerHTML = '<div class="alert alert-success">Thank you! Your message has been sent successfully.</div>';
            formMessage.className = 'mt-3 text-center';
            contactForm.reset();
        } else {
            formMessage.innerHTML = '<div class="alert alert-danger">Please fill in all fields correctly.</div>';
            formMessage.className = 'mt-3 text-center';
        }
    });
    
    // Real-time validation
    const formInputs = contactForm.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required')) {
                if (this.type === 'email') {
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!this.value.trim() || !emailPattern.test(this.value)) {
                        this.classList.add('is-invalid');
                    } else {
                        this.classList.remove('is-invalid');
                    }
                } else {
                    if (!this.value.trim()) {
                        this.classList.add('is-invalid');
                    } else {
                        this.classList.remove('is-invalid');
                    }
                }
            }
        });
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth < 992) {
            navbarCollapse.classList.remove('show');
        }
    });
});

console.log('Portfolio template V2 loaded successfully!');


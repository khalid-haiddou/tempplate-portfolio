/* ====================================
   Portfolio Website Template JavaScript
   ==================================== */

// Initialize AOS (Animate On Scroll) library
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        // Skip if it's just #
        if (targetId === '#') return;
        
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const navbar = document.querySelector('.navbar-modern') || document.querySelector('.navbar');
            const navbarHeight = navbar ? navbar.offsetHeight : 0;
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
    const navLinks = document.querySelectorAll('.nav-link-modern');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const navbar = document.querySelector('.navbar-modern') || document.querySelector('.navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        
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

// Portfolio Filter Functionality
const portfolioFilterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item-modern');

portfolioFilterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        portfolioFilterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Get filter value
        const filterValue = this.getAttribute('data-filter');
        
        // Filter portfolio items
        portfolioItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            
            if (filterValue === 'all' || itemCategory === filterValue) {
                item.style.display = 'block';
                // Trigger AOS animation
                item.style.opacity = '0';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transition = 'opacity 0.3s ease';
                }, 10);
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Animate progress bars on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const progressBarObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target.querySelector('.progress-bar');
            if (progressBar) {
                const width = progressBar.style.width;
                progressBar.style.width = '0%';
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 100);
            }
        }
    });
}, observerOptions);

// Observe all skill items
document.querySelectorAll('.skill-item').forEach(item => {
    progressBarObserver.observe(item);
});

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form inputs
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        // Reset previous validation states
        nameInput.classList.remove('is-invalid');
        emailInput.classList.remove('is-invalid');
        messageInput.classList.remove('is-invalid');
        formMessage.innerHTML = '';
        formMessage.className = 'form-message';
        
        // Validation flags
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
        
        // If form is valid, show success message
        if (isValid) {
            formMessage.innerHTML = 'Thank you! Your message has been sent successfully.';
            formMessage.className = 'form-message success';
            
            // Reset form
            contactForm.reset();
            
            // Optional: Here you would normally send the form data to a server
            // Example: fetch('/api/contact', { method: 'POST', body: formData })
        } else {
            formMessage.innerHTML = 'Please fill in all required fields correctly.';
            formMessage.className = 'form-message error';
        }
    });
    
    // Real-time validation on blur
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

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(26, 37, 47, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = '#1A252F';
        navbar.style.backdropFilter = 'none';
    }
});

// Add fade-in animation to elements when they come into view
const fadeElements = document.querySelectorAll('.portfolio-item, .service-card, .testimonial-card');
const fadeObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

fadeElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(element);
});

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

// Prevent form submission on Enter key in textarea
const messageTextarea = document.getElementById('message');
if (messageTextarea) {
    messageTextarea.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && e.ctrlKey) {
            // Allow Ctrl+Enter to submit
            return;
        }
    });
}

console.log('Portfolio website template loaded successfully!');


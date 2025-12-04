/* ==========================
   PROFESSIONAL PORTFOLIO JS
   Theme Toggle, Smooth Scroll, Animations
   ========================== */

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    initThemeToggle();
    initSmoothScroll();
    initScrollReveal();
    initMobileMenu();
    initLucideIcons();
});

/* ===== THEME TOGGLE (DARK/LIGHT MODE) ===== */
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    if (!themeToggle || !themeIcon) return;
    
    // Function to set theme
    function setTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            themeIcon.setAttribute('data-lucide', 'sun');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            themeIcon.setAttribute('data-lucide', 'moon');
            localStorage.setItem('theme', 'light');
        }
        // Reinitialize icons after changing
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
    
    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    
    setTheme(initialTheme);
    
    // Toggle handler
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
}

/* ===== SMOOTH SCROLLING ===== */
function initSmoothScroll() {
    // Get all anchor links with hash
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip empty hash or just "#"
            if (!href || href === '#') return;
            
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                e.preventDefault();
                
                // Calculate offset for fixed navbar
                const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - 20;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.querySelector('.navbar-menu');
                if (mobileMenu && mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                }
            }
        });
    });
}

/* ===== SCROLL REVEAL ANIMATIONS ===== */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    if (revealElements.length === 0) return;
    
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => {
        revealOnScroll.observe(element);
    });
}

/* ===== MOBILE MENU TOGGLE ===== */
function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    const navbar = document.querySelector('.navbar');
    
    if (!mobileMenuToggle || !navbarMenu) return;
    
    // Create a backdrop element for mobile menu
    const menuBackdrop = document.createElement('div');
    menuBackdrop.className = 'mobile-menu-backdrop';
    menuBackdrop.style.cssText = `
        position: fixed;
        top: 70px;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        opacity: 0;
        visibility: hidden;
        transition: opacity var(--transition-speed) ease, visibility var(--transition-speed) ease;
        z-index: 998;
        backdrop-filter: blur(3px);
    `;
    document.body.appendChild(menuBackdrop);
    
    mobileMenuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        const isActive = navbarMenu.classList.toggle('active');
        
        // Toggle backdrop
        if (isActive) {
            menuBackdrop.style.opacity = '1';
            menuBackdrop.style.visibility = 'visible';
            document.body.style.overflow = 'hidden';
        } else {
            menuBackdrop.style.opacity = '0';
            menuBackdrop.style.visibility = 'hidden';
            document.body.style.overflow = '';
        }
        
        // Toggle icon
        const icon = this.querySelector('[data-lucide]');
        if (icon) {
            const currentIcon = icon.getAttribute('data-lucide');
            icon.setAttribute('data-lucide', currentIcon === 'menu' ? 'x' : 'menu');
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }
    });
    
    // Close menu when clicking on a menu link
    const navbarLinks = navbarMenu.querySelectorAll('.navbar-link');
    navbarLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMenu();
        });
    });
    
    // Close menu when clicking backdrop
    menuBackdrop.addEventListener('click', function() {
        closeMenu();
    });
    
    // Close menu when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navbarMenu.classList.contains('active')) {
            closeMenu();
        }
    });
    
    function closeMenu() {
        navbarMenu.classList.remove('active');
        menuBackdrop.style.opacity = '0';
        menuBackdrop.style.visibility = 'hidden';
        document.body.style.overflow = '';
        
        const icon = mobileMenuToggle.querySelector('[data-lucide]');
        if (icon) {
            icon.setAttribute('data-lucide', 'menu');
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }
    }
}

/* ===== INITIALIZE LUCIDE ICONS ===== */
function initLucideIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

/* ===== NAVBAR SCROLL EFFECT ===== */
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    // Add shadow on scroll
    if (currentScroll > 50) {
        navbar?.classList.add('scrolled');
    } else {
        navbar?.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

/* ===== TYPING EFFECT (Optional for Hero Section) ===== */
function initTypingEffect(element, words, typingSpeed = 100, deletingSpeed = 50, delayBetweenWords = 2000) {
    if (!element || words.length === 0) return;
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            element.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? deletingSpeed : typingSpeed;
        
        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = delayBetweenWords;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
        
        setTimeout(type, typeSpeed);
    }
    
    type();
}

// Example usage (uncomment if you want to use it):
// const typingElement = document.getElementById('typing-text');
// if (typingElement) {
//     initTypingEffect(typingElement, ['Data Analyst', 'ML Enthusiast', 'CSE Student'], 120, 60, 2000);
// }

/* ===== IMAGE LAZY LOADING ===== */
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

/* ===== FORM VALIDATION (If you add a contact form) ===== */
function initFormValidation() {
    const form = document.getElementById('contact-form');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic validation
        const name = form.querySelector('[name="name"]').value.trim();
        const email = form.querySelector('[name="email"]').value.trim();
        const message = form.querySelector('[name="message"]').value.trim();
        
        if (!name || !email || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Here you would typically send the form data to a server
        showNotification('Message sent successfully!', 'success');
        form.reset();
    });
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#6366f1'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 9999;
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/* ===== BACK TO TOP BUTTON ===== */
function initBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');
    
    if (!backToTopButton) return;
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* ===== PROJECT FILTERING (Optional) ===== */
function initProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterButtons.length === 0 || projectCards.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => card.style.opacity = '1', 10);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => card.style.display = 'none', 300);
                }
            });
        });
    });
}

/* ===== STATISTICS COUNTER ANIMATION ===== */
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.target || counter.textContent);
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));
}

/* ===== UTILITY FUNCTIONS ===== */

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Get current year for copyright
function updateCopyrightYear() {
    const yearElement = document.getElementById('copyright-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Call on load
updateCopyrightYear();

/* ===== BACK TO TOP BUTTON ===== */
function initBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');
    
    if (!backToTopButton) return;
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize back to top button
initBackToTop();

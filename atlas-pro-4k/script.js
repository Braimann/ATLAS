/**
 * Atlas Pro 4K - JavaScript
 * Interactive functionality for the IPTV service website
 */

document.addEventListener('DOMContentLoaded', function() {
    // ============================================
    // NAVIGATION SCROLL EFFECT
    // ============================================
    const navbar = document.getElementById('navbar');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    
    // ============================================
    // MOBILE MENU
    // ============================================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    
    if (mobileMenuBtn && mobileMenuOverlay) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        mobileMenuClose.addEventListener('click', function() {
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        // Close menu when clicking on links
        const mobileLinks = mobileMenuOverlay.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
    
    // ============================================
    // COUNTDOWN TIMER
    // ============================================
    const countdownElement = document.getElementById('countdown');
    
    if (countdownElement) {
        // Set countdown to 3 days from now
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + 3);
        
        function updateCountdown() {
            const now = new Date().getTime();
            const distance = endDate - now;
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            const daysEl = document.getElementById('days');
            const hoursEl = document.getElementById('hours');
            const minutesEl = document.getElementById('minutes');
            const secondsEl = document.getElementById('seconds');
            
            if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
            if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
            if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
            if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
        }
        
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
    
    // ============================================
    // FAQ ACCORDION
    // ============================================
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
            question.setAttribute('aria-expanded', !isActive);
        });
    });
    
    // ============================================
    // FAQ CATEGORY TABS (for FAQ page)
    // ============================================
    const categoryTabs = document.querySelectorAll('.category-tab');
    const faqCategories = document.querySelectorAll('.faq-category');
    
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // Update active tab
            categoryTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding category
            faqCategories.forEach(cat => {
                cat.classList.remove('active');
                if (cat.id === category) {
                    cat.classList.add('active');
                }
            });
        });
    });
    
    // ============================================
    // BLOG FILTER (for Blog page)
    // ============================================
    const filterTabs = document.querySelectorAll('.filter-tab');
    const blogCards = document.querySelectorAll('.blog-card');
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // Update active tab
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Filter blog cards
            blogCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // ============================================
    // SCROLL ANIMATIONS (AOS-like)
    // ============================================
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.aosDelay || 0;
                setTimeout(() => {
                    entry.target.classList.add('aos-animate');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(el => observer.observe(el));
    
    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ============================================
    // PARTICLES EFFECT (Hero section)
    // ============================================
    const particlesContainer = document.getElementById('particles');
    
    if (particlesContainer) {
        function createParticle() {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: rgba(0, 212, 255, 0.5);
                border-radius: 50%;
                pointer-events: none;
                left: ${Math.random() * 100}%;
                top: 100%;
                animation: float-up ${5 + Math.random() * 5}s linear forwards;
            `;
            particlesContainer.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 10000);
        }
        
        // Add CSS animation for particles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float-up {
                0% {
                    transform: translateY(0) scale(1);
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100vh) scale(0);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
        
        // Create particles periodically
        setInterval(createParticle, 500);
    }
    
    // ============================================
    // GLITCH EFFECT (for 404 page)
    // ============================================
    const glitchElement = document.querySelector('.error-glitch');
    
    if (glitchElement) {
        setInterval(() => {
            glitchElement.style.textShadow = `
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 rgba(255, 0, 110, 0.5),
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 rgba(0, 212, 255, 0.5)
            `;
            setTimeout(() => {
                glitchElement.style.textShadow = 'none';
            }, 100);
        }, 2000);
    }
    
    // ============================================
    // FORM VALIDATION (Newsletter)
    // ============================================
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (email && email.includes('@')) {
                alert('Merci pour votre inscription ! Vous recevrez bientôt nos actualités.');
                this.reset();
            } else {
                alert('Veuillez entrer une adresse email valide.');
            }
        });
    }
    
    // ============================================
    // LAZY LOADING IMAGES
    // ============================================
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.removeAttribute('loading');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // ============================================
    // CONSOLE MESSAGE
    // ============================================
    console.log('%c🔥 Atlas Pro 4K', 'font-size: 24px; font-weight: bold; color: #00d4ff;');
    console.log('%cLe meilleur service IPTV en 2026', 'font-size: 14px; color: #a0a0b0;');
    console.log('%c📞 Contact: WhatsApp +212 770 303 940', 'font-size: 12px; color: #25D366;');
});

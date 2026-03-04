/**
 * ATLAS PRO 4K - JavaScript Principal
 * Interactions et animations du site
 */

document.addEventListener('DOMContentLoaded', function() {
    // ========================================
    // LOADING SCREEN
    // ========================================
    const loadingScreen = document.getElementById('loading-screen');
    
    window.addEventListener('load', function() {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 800);
    });

    // ========================================
    // HEADER SCROLL EFFECT
    // ========================================
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ========================================
    // MOBILE MENU
    // ========================================
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    
    if (mobileMenuToggle && mobileMenuOverlay) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            mobileMenuOverlay.classList.toggle('active');
            document.body.style.overflow = mobileMenuOverlay.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when clicking on a link
        const mobileNavLinks = mobileMenuOverlay.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                mobileMenuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ========================================
    // PARTICLES BACKGROUND
    // ========================================
    const particlesContainer = document.getElementById('particles');
    
    if (particlesContainer) {
        const particleCount = window.innerWidth < 768 ? 15 : 30;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.animationDuration = (10 + Math.random() * 10) + 's';
            particlesContainer.appendChild(particle);
        }
    }

    // ========================================
    // TYPING EFFECT
    // ========================================
    const typingText = document.getElementById('typing-text');
    
    if (typingText) {
        const texts = [
            '22 000+ Chaînes TV...',
            '150 000 Films & Séries...',
            'Qualité 4K Ultra HD...',
            'Sans coupure garantie...'
        ];
        
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        
        function type() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typingText.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typingText.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }
            
            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                typingSpeed = 2000; // Pause at end
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typingSpeed = 500; // Pause before new text
            }
            
            setTimeout(type, typingSpeed);
        }
        
        type();
    }

    // ========================================
    // COUNTDOWN TIMER
    // ========================================
    function updateCountdown() {
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        
        if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;
        
        // Set end date to 2 days from now
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + 2);
        endDate.setHours(23, 59, 59, 999);
        
        function calculateTime() {
            const now = new Date();
            const diff = endDate - now;
            
            if (diff <= 0) {
                // Reset countdown
                endDate.setDate(endDate.getDate() + 2);
                return;
            }
            
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            daysEl.textContent = String(days).padStart(2, '0');
            hoursEl.textContent = String(hours).padStart(2, '0');
            minutesEl.textContent = String(minutes).padStart(2, '0');
            secondsEl.textContent = String(seconds).padStart(2, '0');
        }
        
        calculateTime();
        setInterval(calculateTime, 1000);
    }
    
    updateCountdown();

    // ========================================
    // COUNTER ANIMATION
    // ========================================
    const counters = document.querySelectorAll('.counter');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;
                
                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        counter.textContent = Math.floor(current).toLocaleString();
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target.toLocaleString();
                    }
                };
                
                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));

    // ========================================
    // FAQ ACCORDION
    // ========================================
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
            this.setAttribute('aria-expanded', !isActive);
        });
    });

    // ========================================
    // BACK TO TOP BUTTON
    // ========================================
    const backToTop = document.getElementById('back-to-top');
    
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ========================================
    // SCROLL REVEAL ANIMATION
    // ========================================
    const revealElements = document.querySelectorAll('[data-aos]');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-aos-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('aos-animate');
                }, delay);
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => revealObserver.observe(el));

    // ========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // PRICING CARD HOLOGRAPHIC EFFECT
    // ========================================
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    pricingCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    // ========================================
    // PARALLAX EFFECT FOR HERO
    // ========================================
    const heroBg = document.querySelector('.hero-bg img');
    
    if (heroBg && !window.matchMedia('(pointer: coarse)').matches) {
        window.addEventListener('scroll', function() {
            const scrolled = window.scrollY;
            heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        });
    }

    // ========================================
    // GLITCH EFFECT TRIGGER
    // ========================================
    const glitchElement = document.querySelector('.glitch');
    
    if (glitchElement) {
        setInterval(() => {
            glitchElement.style.animation = 'none';
            setTimeout(() => {
                glitchElement.style.animation = '';
            }, 10);
        }, 5000);
    }

    // ========================================
    // FORM VALIDATION (for contact page)
    // ========================================
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            let isValid = true;
            
            // Reset errors
            document.querySelectorAll('.form-error').forEach(el => el.remove());
            
            // Validate name
            if (!name.value.trim()) {
                showError(name, 'Veuillez entrer votre nom');
                isValid = false;
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                showError(email, 'Veuillez entrer un email valide');
                isValid = false;
            }
            
            // Validate message
            if (!message.value.trim()) {
                showError(message, 'Veuillez entrer votre message');
                isValid = false;
            }
            
            if (isValid) {
                // Show success message
                const successMsg = document.createElement('div');
                successMsg.className = 'form-success';
                successMsg.textContent = 'Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.';
                contactForm.prepend(successMsg);
                
                // Reset form
                contactForm.reset();
                
                // Remove success message after 5 seconds
                setTimeout(() => {
                    successMsg.remove();
                }, 5000);
            }
        });
    }
    
    function showError(input, message) {
        const error = document.createElement('span');
        error.className = 'form-error';
        error.textContent = message;
        error.style.color = 'var(--accent-red)';
        error.style.fontSize = '0.85rem';
        error.style.marginTop = '0.25rem';
        error.style.display = 'block';
        input.parentNode.appendChild(error);
        input.style.borderColor = 'var(--accent-red)';
    }

    // ========================================
    // COPY TO CLIPBOARD (for codes)
    // ========================================
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const textToCopy = this.getAttribute('data-copy');
            
            navigator.clipboard.writeText(textToCopy).then(() => {
                const originalText = this.textContent;
                this.textContent = '✓ Copié !';
                this.style.background = 'var(--accent-green)';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.background = '';
                }, 2000);
            });
        });
    });

    // ========================================
    // TAB SWITCHING (for subscription page)
    // ========================================
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to current button and content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // ========================================
    // COOKIE CONSENT
    // ========================================
    const cookieConsent = document.getElementById('cookie-consent');
    const cookieAccept = document.getElementById('cookie-accept');
    
    if (cookieConsent && cookieAccept) {
        // Check if user already accepted cookies
        if (!localStorage.getItem('cookiesAccepted')) {
            setTimeout(() => {
                cookieConsent.classList.add('visible');
            }, 2000);
        }
        
        cookieAccept.addEventListener('click', function() {
            localStorage.setItem('cookiesAccepted', 'true');
            cookieConsent.classList.remove('visible');
        });
    }

    // ========================================
    // NOTIFICATION SYSTEM
    // ========================================
    window.showNotification = function(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        const colors = {
            info: 'var(--accent-blue)',
            success: 'var(--accent-green)',
            error: 'var(--accent-red)',
            warning: 'var(--accent-gold)'
        };
        
        notification.style.cssText = `
            position: fixed;
            top: 90px;
            right: 20px;
            padding: 1rem 1.5rem;
            background: rgba(13, 13, 43, 0.95);
            border: 1px solid ${colors[type]};
            border-radius: 12px;
            color: white;
            font-size: 0.9rem;
            z-index: 10000;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    };

    // ========================================
    // KEYBOARD NAVIGATION
    // ========================================
    document.addEventListener('keydown', function(e) {
        // Escape to close mobile menu
        if (e.key === 'Escape') {
            if (mobileMenuOverlay && mobileMenuOverlay.classList.contains('active')) {
                mobileMenuToggle.classList.remove('active');
                mobileMenuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });

    // ========================================
    // PERFORMANCE: Pause animations when tab is hidden
    // ========================================
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            document.body.classList.add('paused');
        } else {
            document.body.classList.remove('paused');
        }
    });

    // ========================================
    // CONSOLE MESSAGE
    // ========================================
    console.log('%c🔥 Atlas Pro 4K', 'font-size: 24px; font-weight: bold; color: #00d4ff;');
    console.log('%cSite officiel : https://atlaspro4k.net', 'font-size: 14px; color: #7b2fff;');
    console.log('%cSupport 24/7 : support@atlaspro4k.net', 'font-size: 12px; color: #a0aec0;');
});

// ========================================
// CSS ANIMATIONS FOR NOTIFICATIONS
// ========================================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    body.paused * {
        animation-play-state: paused !important;
    }
`;
document.head.appendChild(style);

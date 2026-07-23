/* AERC Premium Static Website Script */

document.addEventListener('DOMContentLoaded', function() {
    // 1. Sticky Navbar
    const navbar = document.querySelector('.main-navbar');
    const topBar = document.querySelector('.top-bar');
    let stickyPoint = topBar ? topBar.offsetHeight : 50;

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > stickyPoint) {
            navbar.classList.add('navbar-sticky');
            if (topBar) {
                // Adjust body padding to avoid content jump
                document.body.style.paddingTop = navbar.offsetHeight + 'px';
            }
        } else {
            navbar.classList.remove('navbar-sticky');
            document.body.style.paddingTop = '0px';
        }
    });

    // 2. Highlight Active Page Link
    const currentPath = window.location.pathname;
    const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === pageName || (pageName === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 3. Duplicate Brand Track for Infinite Scrolling
    const brandTrack = document.querySelector('.brand-carousel-track');
    if (brandTrack) {
        // Clone the children of the brand track to ensure continuous scrolling
        const clone = brandTrack.innerHTML;
        brandTrack.innerHTML = clone + clone + clone; // Triplicate to make sure there's no visible blank space
    }

    // 4. Scroll Animations (Intersection Observer)
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target); // Animates once
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animateElements.forEach(el => {
        animationObserver.observe(el);
    });

    // 5. Statistics Counters (Intersection Observer)
    const counterElements = document.querySelectorAll('.counter-num');
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const endVal = parseInt(target.getAttribute('data-target'), 10);
                const suffix = target.getAttribute('data-suffix') || '';
                animateCounter(target, endVal, suffix);
                observer.unobserve(target);
            }
        });
    }, {
        threshold: 0.5
    });

    counterElements.forEach(el => {
        counterObserver.observe(el);
    });

    function animateCounter(element, endValue, suffix) {
        let startValue = 0;
        const duration = 2000; // 2 seconds
        const startTime = performance.now();

        function updateCounter(currentTime) {
            const elapsedTime = currentTime - startTime;
            if (elapsedTime >= duration) {
                element.textContent = endValue + suffix;
                return;
            }
            const progress = elapsedTime / duration;
            // Easing function: easeOutQuad
            const easedProgress = progress * (2 - progress);
            const currentValue = Math.floor(easedProgress * endValue);
            element.textContent = currentValue + suffix;
            requestAnimationFrame(updateCounter);
        }
        requestAnimationFrame(updateCounter);
    }

    // 6. Back-to-Top Button Visibility
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 7. Contact Form Validation and Submission
    const contactForm = document.getElementById('aercContactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateForm(contactForm)) {
                // Mock success alert (Premium style)
                showFormAlert(contactForm, 'success', 'Thank you! Your enquiry has been received. Our sales team will get back to you shortly.');
                contactForm.reset();
            }
        });
    }

    const footerForm = document.getElementById('aercFooterNewsletter');
    if (footerForm) {
        footerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = footerForm.querySelector('input[type="email"]');
            if (emailInput && emailInput.value.trim() !== '') {
                alert('Thank you for subscribing to our updates!');
                footerForm.reset();
            }
        });
    }

    // 8. Support Page Tab Handling (safely kept for legacy query routing)
    const supportTabLinks = document.querySelectorAll('.support-tab-link');
    const supportPanes = document.querySelectorAll('.support-tab-pane');

    if (supportTabLinks.length > 0 && supportPanes.length > 0) {
        function switchSupportTab(tabId) {
            // Update active link classes
            supportTabLinks.forEach(link => {
                if (link.getAttribute('data-target') === tabId) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });

            // Show/hide correct panes
            supportPanes.forEach(pane => {
                if (pane.id === `support-pane-${tabId}`) {
                    pane.classList.add('show', 'active');
                } else {
                    pane.classList.remove('show', 'active');
                }
            });

            // Update URL hash/query without reload
            const newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?tab=' + tabId;
            window.history.pushState({path:newurl},'',newurl);
        }

        // Add click events to links
        supportTabLinks.forEach(link => {
            link.addEventListener('click', function() {
                const target = this.getAttribute('data-target');
                switchSupportTab(target);
            });
        });

        // Check for URL query param on page load
        const urlParams = new URLSearchParams(window.location.search);
        const activeTab = urlParams.get('tab');
        if (activeTab) {
            // Check if tab exists
            const tabExists = Array.from(supportTabLinks).some(link => link.getAttribute('data-target') === activeTab);
            if (tabExists) {
                switchSupportTab(activeTab);
            }
        }
    }

    // 9. Support Forms submissions (runs on dedicated pages)
    const registrationForm = document.getElementById('aercProductRegistrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateForm(registrationForm)) {
                showFormAlert(registrationForm, 'success', 'Success! Your product registration has been submitted successfully. A confirmation email has been sent.');
                registrationForm.reset();
            }
        });
    }

    const serviceRequestForm = document.getElementById('aercServiceRequestForm');
    if (serviceRequestForm) {
        serviceRequestForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateForm(serviceRequestForm)) {
                showFormAlert(serviceRequestForm, 'success', 'Success! Your service request has been booked. Our technical coordinator will call you to confirm the visit.');
                serviceRequestForm.reset();
            }
        });
    }

    const installationRequestForm = document.getElementById('aercInstallationRequestForm');
    if (installationRequestForm) {
        installationRequestForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateForm(installationRequestForm)) {
                showFormAlert(installationRequestForm, 'success', 'Success! Your installation request has been logged. We will contact you shortly.');
                installationRequestForm.reset();
            }
        });
    }

    const amcEnquiryForm = document.getElementById('aercAmcRequestForm');
    if (amcEnquiryForm) {
        amcEnquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateForm(amcEnquiryForm)) {
                showFormAlert(amcEnquiryForm, 'success', 'Success! Your AMC enquiry has been received. Our sales engineer will share a customized contract quote.');
                amcEnquiryForm.reset();
            }
        });
    }

    // Helper functions
    function validateForm(form) {
        let isValid = true;
        const requiredInputs = form.querySelectorAll('[required]');
        
        requiredInputs.forEach(input => {
            // Remove previous error styling/message
            input.classList.remove('is-invalid');
            const errEl = input.parentNode.querySelector('.invalid-feedback');
            if (errEl) errEl.remove();

            if (input.value.trim() === '') {
                isValid = false;
                showInputError(input, 'This field is required.');
            } else if (input.type === 'email' && !validateEmail(input.value)) {
                isValid = false;
                showInputError(input, 'Please enter a valid email address.');
            } else if (input.type === 'tel' && !validatePhone(input.value)) {
                isValid = false;
                showInputError(input, 'Please enter a valid 10-digit phone number.');
            }
        });

        return isValid;
    }

    function showInputError(input, message) {
        input.classList.add('is-invalid');
        const feedback = document.createElement('div');
        feedback.className = 'invalid-feedback';
        feedback.textContent = message;
        input.parentNode.appendChild(feedback);
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        const re = /^\d{10}$/; // Basic 10-digit phone validation
        return re.test(phone.replace(/[-+()\s]/g, ''));
    }

    function showFormAlert(form, type, message) {
        // Remove existing alert
        const existingAlert = form.querySelector('.alert');
        if (existingAlert) existingAlert.remove();

        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type === 'success' ? 'success' : 'danger'} mt-3`;
        alertDiv.role = 'alert';
        alertDiv.textContent = message;
        
        form.appendChild(alertDiv);
        
        // Auto scroll to alert
        alertDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // 10. Hero Slider Manager
    const slides = document.querySelectorAll('.hero-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.slider-dot');
    const sliderSec = document.querySelector('.hero-slider-section');
    
    if (slides.length > 0) {
        let currentSlide = 0;
        let slideInterval;
        const intervalTime = 2000; // 2 seconds

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            currentSlide = (index + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        function startAutoplay() {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, intervalTime);
        }

        function stopAutoplay() {
            clearInterval(slideInterval);
        }

        // Event listeners
        if (nextBtn) nextBtn.addEventListener('click', () => {
            nextSlide();
            startAutoplay();
        });
        if (prevBtn) prevBtn.addEventListener('click', () => {
            prevSlide();
            startAutoplay();
        });

        dots.forEach(dot => {
            dot.addEventListener('click', function() {
                const idx = parseInt(this.getAttribute('data-index'), 10);
                showSlide(idx);
                startAutoplay();
            });
        });

        // Pause on hover
        if (sliderSec) {
            sliderSec.addEventListener('mouseenter', stopAutoplay);
            sliderSec.addEventListener('mouseleave', startAutoplay);
            
            // Mobile Swipe Support
            let startX = 0;
            sliderSec.addEventListener('touchstart', e => {
                startX = e.touches[0].clientX;
            }, { passive: true });
            
            sliderSec.addEventListener('touchend', e => {
                const endX = e.changedTouches[0].clientX;
                if (startX - endX > 50) {
                    nextSlide();
                    startAutoplay();
                } else if (endX - startX > 50) {
                    prevSlide();
                    startAutoplay();
                }
            }, { passive: true });
        }

        // Keyboard navigation
        document.addEventListener('keydown', e => {
            if (e.key === 'ArrowRight') {
                nextSlide();
                startAutoplay();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
                startAutoplay();
            }
        });

        // Initialize autoplay
        startAutoplay();
    }
});

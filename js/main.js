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

    // 7. Robust Form Validation, Security Sanitization & Anti-Submissions System
    function initFormValidation(formId, successMessage) {
        const form = document.getElementById(formId);
        if (!form) return;

        const submitBtn = form.querySelector('button[type="submit"]');
        const inputs = form.querySelectorAll('input, select, textarea');

        function sanitizeInput(str) {
            return str
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#x27;')
                .replace(/\//g, '&#x2F;');
        }

        function validateField(input) {
            let isValid = true;
            let message = '';
            let value = input.value;
            
            if (input.type !== 'file') {
                value = value.replace(/\s+/g, ' ').trim();
            }

            if (input.hasAttribute('required') && (!value || value === '')) {
                isValid = false;
                message = 'This field is required.';
            } else if (value !== '') {
                if (input.type === 'email') {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(value)) {
                        isValid = false;
                        message = 'Please enter a valid email address.';
                    }
                } else if (input.type === 'tel') {
                    const normalizedPhone = value.replace(/[-+()\s]/g, '');
                    const phoneRegex = /^\d{10,15}$/;
                    if (!phoneRegex.test(normalizedPhone)) {
                        isValid = false;
                        message = 'Please enter a valid 10 to 15-digit phone number.';
                    }
                } else if (input.id === 'customerName' || input.id === 'engineerName' || input.id === 'contactName') {
                    if (value.length < 2) {
                        isValid = false;
                        message = 'Name must be at least 2 characters long.';
                    } else if (value.length > 50) {
                        isValid = false;
                        message = 'Name cannot exceed 50 characters.';
                    }
                } else if (input.type === 'file') {
                    const files = input.files;
                    if (files && files.length > 0) {
                        const file = files[0];
                        const maxSizeBytes = 5 * 1024 * 1024;
                        const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
                        
                        if (file.size > maxSizeBytes) {
                            isValid = false;
                            message = 'File size exceeds the 5MB limit.';
                        } else if (!allowedTypes.includes(file.type)) {
                            isValid = false;
                            message = 'Only PDF and image files (JPG, PNG) are allowed.';
                        }
                    }
                }
            }

            if (!isValid) {
                input.classList.remove('is-valid');
                input.classList.add('is-invalid');
                let errEl = input.parentNode.querySelector('.invalid-feedback');
                if (!errEl) {
                    errEl = document.createElement('div');
                    errEl.className = 'invalid-feedback';
                    input.parentNode.appendChild(errEl);
                }
                errEl.textContent = message;
                
                if (input.type === 'file') {
                    const wrapper = form.querySelector('.file-upload-wrapper');
                    if (wrapper) {
                        wrapper.style.borderColor = '#dc3545';
                        const text = wrapper.querySelector('p');
                        if (text) text.textContent = message;
                    }
                }
            } else {
                input.classList.remove('is-invalid');
                if (value !== '') {
                    input.classList.add('is-valid');
                } else {
                    input.classList.remove('is-valid');
                }
                let errEl = input.parentNode.querySelector('.invalid-feedback');
                if (errEl) errEl.remove();

                if (input.type === 'file') {
                    const wrapper = form.querySelector('.file-upload-wrapper');
                    if (wrapper) {
                        wrapper.style.borderColor = '#28a745';
                        const text = wrapper.querySelector('p');
                        const files = input.files;
                        if (text && files && files.length > 0) {
                            text.textContent = `Selected: ${files[0].name}`;
                        }
                    }
                }
            }
            return isValid;
        }

        inputs.forEach(input => {
            input.addEventListener('input', () => {
                validateField(input);
                checkFormValidity();
            });
            input.addEventListener('change', () => {
                validateField(input);
                checkFormValidity();
            });
            input.addEventListener('blur', () => {
                validateField(input);
                checkFormValidity();
            });
        });

        function checkFormValidity() {
            let formIsValid = true;
            inputs.forEach(input => {
                if (input.hasAttribute('required') && (!input.value || input.value.trim() === '')) {
                    formIsValid = false;
                }
                if (input.classList.contains('is-invalid')) {
                    formIsValid = false;
                }
            });
            if (submitBtn) {
                if (formIsValid) {
                    submitBtn.removeAttribute('disabled');
                    submitBtn.style.opacity = '1';
                } else {
                    submitBtn.setAttribute('disabled', 'true');
                    submitBtn.style.opacity = '0.65';
                }
            }
            return formIsValid;
        }

        checkFormValidity();

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let allValid = true;
            inputs.forEach(input => {
                if (!validateField(input)) {
                    allValid = false;
                }
            });
            if (!allValid) {
                showFormAlert(form, 'danger', 'Please correct the errors in the form before submitting.');
                return;
            }
            inputs.forEach(input => {
                if (input.type !== 'file') {
                    input.value = sanitizeInput(input.value.replace(/\s+/g, ' ').trim());
                }
            });
            if (submitBtn) {
                submitBtn.setAttribute('disabled', 'true');
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin me-2"></i>Submitting...';
                setTimeout(() => {
                    showFormAlert(form, 'success', successMessage);
                    form.reset();
                    inputs.forEach(inp => {
                        inp.classList.remove('is-valid', 'is-invalid');
                    });
                    const wrapper = form.querySelector('.file-upload-wrapper');
                    if (wrapper) {
                        wrapper.style.borderColor = '';
                        const text = wrapper.querySelector('p');
                        if (text) text.textContent = 'Click to upload or drag & drop';
                    }
                    submitBtn.innerHTML = originalText;
                    checkFormValidity();
                }, 1500);
            }
        });
    }

    function showFormAlert(form, type, message) {
        const existingAlert = form.querySelector('.alert');
        if (existingAlert) existingAlert.remove();
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type === 'success' ? 'success' : 'danger'} mt-3`;
        alertDiv.role = 'alert';
        alertDiv.textContent = message;
        form.appendChild(alertDiv);
        alertDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Initialize Active Forms Validation
    initFormValidation('aercContactForm', 'Thank you! Your enquiry has been received. Our sales team will coordinate load capacities and prices with you shortly.');
    initFormValidation('aercProductRegistrationForm', 'Success! Your product registration has been submitted successfully. A confirmation email has been sent.');
    initFormValidation('aercInstallationRequestForm', 'Success! Your technical consultation request has been logged. Our sizing coordinator will contact you shortly.');
    initFormValidation('catalogEnquiryForm', 'Thank you! Your wholesale pricing and sizing enquiry has been submitted. Our sales team will get back to you shortly.');
    initFormValidation('aercServiceRequestForm', 'Success! Your service request has been booked. Our coordinator will contact you shortly.');
    initFormValidation('aercAmcRequestForm', 'Success! Your AMC enquiry has been received. Our sales engineer will share a contract quote.');

    // 8. Footer Newsletter Form
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

    // 9. Support Page Tab Handling (safely kept for legacy query routing)
    const supportTabLinks = document.querySelectorAll('.support-tab-link');
    const supportPanes = document.querySelectorAll('.support-tab-pane');
    if (supportTabLinks.length > 0 && supportPanes.length > 0) {
        function switchSupportTab(tabId) {
            supportTabLinks.forEach(link => {
                if (link.getAttribute('data-target') === tabId) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
            supportPanes.forEach(pane => {
                if (pane.id === `support-pane-${tabId}`) {
                    pane.classList.add('show', 'active');
                } else {
                    pane.classList.remove('show', 'active');
                }
            });
            const newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?tab=' + tabId;
            window.history.pushState({path:newurl},'',newurl);
        }
        supportTabLinks.forEach(link => {
            link.addEventListener('click', function() {
                const target = this.getAttribute('data-target');
                switchSupportTab(target);
            });
        });
        const urlParams = new URLSearchParams(window.location.search);
        const activeTab = urlParams.get('tab');
        if (activeTab) {
            const tabExists = Array.from(supportTabLinks).some(link => link.getAttribute('data-target') === activeTab);
            if (tabExists) {
                switchSupportTab(activeTab);
            }
        }
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

    // 10. Mobile Mega Menu Accordion Toggle
    const megaMenuParent = document.querySelector('.nav-item.has-mega-menu');
    if (megaMenuParent) {
        const megaMenuLink = megaMenuParent.querySelector('a.nav-link');
        if (megaMenuLink) {
            megaMenuLink.addEventListener('click', function(e) {
                if (window.innerWidth < 992) {
                    if (!megaMenuParent.classList.contains('show-mobile')) {
                        e.preventDefault();
                        megaMenuParent.classList.add('show-mobile');
                    } else {
                        // Already open: let it navigate to products.html if clicked again
                    }
                }
            });
        }
    }

    // Close mobile mega menu if clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth < 992 && megaMenuParent && !megaMenuParent.contains(e.target)) {
            megaMenuParent.classList.remove('show-mobile');
        }
    });

    // 11. Dynamic JSON-LD SEO Schema Injection
    function injectJSONLD() {
        const path = window.location.pathname;
        const page = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
        const schemas = [];

        // Organization Schema (Global)
        const orgSchema = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Ajanta Electric & Refrigeration Co. (AERC)",
            "url": "https://www.ajantaelectric.com",
            "logo": "https://www.ajantaelectric.com/assets/images/logo_left.png",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-98234-44447",
                "contactType": "sales",
                "areaServed": "IN",
                "availableLanguage": ["en", "hi", "mr"]
            },
            "sameAs": [
                "https://www.facebook.com/ajantaelectric",
                "https://www.instagram.com/ajanta_electric",
                "https://youtube.com/channel/UCgGjAWxnyXEsXDPetMmoe_w"
            ]
        };
        schemas.push(orgSchema);

        // WebSite & LocalBusiness Schema (Homepage)
        if (page === 'index.html') {
            const websiteSchema = {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Ajanta Electric & Refrigeration Co.",
                "url": "https://www.ajantaelectric.com",
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://www.ajantaelectric.com/products.html?search={search_term_string}",
                    "query-input": "required name=search_term_string"
                }
            };
            schemas.push(websiteSchema);

            const businessSchema = {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Ajanta Electric & Refrigeration Co.",
                "image": "https://www.ajantaelectric.com/assets/images/slider_showcase.png",
                "telephone": "+91-98234-44447",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Ground floor, Mini Mall, B002- B005, C type Building, Sillekhana Samarth Nagar Road",
                    "addressLocality": "Chhatrapati Sambhajinagar (Aurangabad)",
                    "addressRegion": "Maharashtra",
                    "postalCode": "431001",
                    "addressCountry": "IN"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "19.8732",
                    "longitude": "75.3284"
                },
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
                    ],
                    "opens": "10:00",
                    "closes": "19:00"
                }
            };
            schemas.push(businessSchema);
        }

        // FAQ Schema (FAQs page)
        if (page === 'faqs.html') {
            const faqSchema = {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Are you an authorized dealer?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, AERC is an authorized channel partner, wholesaler, and SSD dealer for global engineering brands like Daikin, Copeland, Danfoss, and others."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do you provide installation services?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, AERC provides full technical support, sizing consultations, and coordinator deployment for industrial installations."
                        }
                    }
                ]
            };
            schemas.push(faqSchema);
        }

        // Inject schemas into document head
        schemas.forEach(schema => {
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.text = JSON.stringify(schema);
            document.head.appendChild(script);
        });
    }
    injectJSONLD();
});

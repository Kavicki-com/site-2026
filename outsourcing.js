// ============================================
// OUTSOURCING LANDING PAGE SCRIPTS
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    // ============================================
    // FAQ ACCORDION
    // ============================================
    const faqItems = document.querySelectorAll('.out-faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.out-faq-question');
        if (!question) return;

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all
            faqItems.forEach(i => i.classList.remove('active'));

            // Open clicked if wasn't active
            if (!isActive) {
                item.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
            } else {
                question.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // ============================================
    // PORTFOLIO TABS
    // ============================================
    const tabs = document.querySelectorAll('.out-tab');
    const tabContents = document.querySelectorAll('.out-tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.tab;

            // Switch active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Switch active content
            tabContents.forEach(tc => tc.classList.remove('active'));
            const activeContent = document.getElementById('tab-' + target);
            if (activeContent) {
                activeContent.classList.add('active');

                // Re-trigger fade-in animations for newly visible items
                activeContent.querySelectorAll('.fade-in-up').forEach((el, i) => {
                    el.classList.remove('visible');
                    setTimeout(() => el.classList.add('visible'), i * 80);
                });
            }
        });
    });



    // Make first tab items visible immediately
    const firstTab = document.querySelector('.out-tab-content.active');
    if (firstTab) {
        firstTab.querySelectorAll('.fade-in-up').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), 300 + i * 80);
        });
    }

    // ============================================
    // SCROLL ANIMATIONS (Intersection Observer)
    // ============================================
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up');

    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Stagger animation
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 80);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(el => observer.observe(el));
    }

    // ============================================
    // SMOOTH SCROLL for anchor links
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const offset = 80; // Navbar height
                const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // ============================================
    // CUSTOM CURSOR
    // ============================================
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorCircle = document.querySelector('.cursor-circle');

    if (cursorDot && cursorCircle) {
        // Only show custom cursor on desktop
        if (window.innerWidth > 992) {
            document.addEventListener('mousemove', (e) => {
                cursorDot.style.left = e.clientX + 'px';
                cursorDot.style.top = e.clientY + 'px';
                cursorCircle.style.left = e.clientX + 'px';
                cursorCircle.style.top = e.clientY + 'px';
            });

            // Hover effect on interactive elements
            const hoverTargets = document.querySelectorAll('a, button, .out-service-card, .out-pricing-card, .out-faq-question');
            hoverTargets.forEach(target => {
                target.addEventListener('mouseenter', () => document.body.classList.add('hovered'));
                target.addEventListener('mouseleave', () => document.body.classList.remove('hovered'));
            });
        } else {
            cursorDot.style.display = 'none';
            cursorCircle.style.display = 'none';
        }
    }



});

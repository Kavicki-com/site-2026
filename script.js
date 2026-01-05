document.addEventListener('DOMContentLoaded', () => {
    
    // 0. Menu Hambúrguer
    const menuToggle = document.querySelector('.menu-toggle');
    const menuItems = document.querySelector('.menu-items');
    
    if (menuToggle && menuItems) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            menuItems.classList.toggle('active');
        });
        
        // Fechar menu ao clicar em um link
        const menuLinks = menuItems.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                menuItems.classList.remove('active');
            });
        });
    }
    
    // 1. Cursor Follower
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorCircle = document.querySelector('.cursor-circle');
    const interactiveElements = document.querySelectorAll('a, button, input, textarea');

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        
        cursorDot.style.left = `${x}px`;
        cursorDot.style.top = `${y}px`;
        
        cursorCircle.animate({
            left: `${x}px`,
            top: `${y}px`
        }, { duration: 500, fill: "forwards" });
    });

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('hovered'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('hovered'));
    });


    // 2. Reveal Animations (Fade In)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.fade-in, .fade-in-up, .project-item, .service-card, .step-item, .ai-content, .ai-visual, .review-box, .team-card');
    hiddenElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });

    const style = document.createElement('style');
    style.innerHTML = `.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
    document.head.appendChild(style);

    // 3. Number Counter
    const statsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            const counters = document.querySelectorAll('.counter');
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const duration = 2000; 
                const increment = target / (duration / 16); 

                let current = 0;
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.innerText = '+' + Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = '+' + target;
                    }
                };
                updateCounter();
            });
            statsObserver.disconnect();
        }
    });

    const statsSection = document.querySelector('.stats-flex');
    if(statsSection) statsObserver.observe(statsSection);

    // 4. Globe 3D with Drag Rotation
    const globeCanvas = document.getElementById('globe-canvas');
    if (globeCanvas && typeof THREE !== 'undefined') {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, globeCanvas.clientWidth / globeCanvas.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: globeCanvas, alpha: true, antialias: true });
        
        renderer.setSize(globeCanvas.clientWidth, globeCanvas.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);

        // Create globe
        const geometry = new THREE.SphereGeometry(2, 64, 64);
        
        // Load Earth textures
        const textureLoader = new THREE.TextureLoader();
        
        // Try multiple texture sources for better compatibility
        const textureBaseUrl = 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/';
        
        // Earth texture (diffuse map) - with atmosphere
        const earthTexture = textureLoader.load(
            textureBaseUrl + 'earth_atmos_2048.jpg',
            () => {
                renderer.render(scene, camera);
            },
            undefined,
            () => {
                // Fallback if main texture fails
                console.log('Using fallback Earth texture');
            }
        );
        
        // Normal map for terrain detail
        const normalTexture = textureLoader.load(
            textureBaseUrl + 'earth_normal_2048.jpg',
            undefined,
            undefined,
            () => {
                // Normal map is optional, continue without it if it fails
            }
        );
        
        // Specular map for water reflections
        const specularTexture = textureLoader.load(
            textureBaseUrl + 'earth_specular_2048.jpg',
            undefined,
            undefined,
            () => {
                // Specular map is optional, continue without it if it fails
            }
        );
        
        // Create Earth material with realistic textures
        const material = new THREE.MeshPhongMaterial({ 
            map: earthTexture,
            normalMap: normalTexture,
            specularMap: specularTexture,
            shininess: 30,
            transparent: false
        });
        
        const globe = new THREE.Mesh(geometry, material);
        scene.add(globe);

        // Add ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);

        // Add directional light (sun)
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(5, 3, 5);
        scene.add(directionalLight);

        // Camera position
        camera.position.z = 4;

        // Rotation variables
        let isDragging = false;
        let previousMousePosition = { x: 0, y: 0 };
        let rotationX = 0;
        let rotationY = 0;
        let targetRotationX = 0;
        let targetRotationY = 0;
        let autoRotate = true;
        let autoRotateSpeed = 0.005;

        // Mouse events
        globeCanvas.addEventListener('mousedown', (e) => {
            isDragging = true;
            autoRotate = false;
            previousMousePosition = { x: e.clientX, y: e.clientY };
        });

        globeCanvas.addEventListener('mousemove', (e) => {
            if (isDragging) {
                const deltaX = e.clientX - previousMousePosition.x;
                const deltaY = e.clientY - previousMousePosition.y;

                targetRotationY += deltaX * 0.01;
                targetRotationX += deltaY * 0.01;

                previousMousePosition = { x: e.clientX, y: e.clientY };
            }
        });

        globeCanvas.addEventListener('mouseup', () => {
            isDragging = false;
            // Resume auto-rotation after 2 seconds of inactivity
            setTimeout(() => {
                if (!isDragging) autoRotate = true;
            }, 2000);
        });

        globeCanvas.addEventListener('mouseleave', () => {
            isDragging = false;
            setTimeout(() => {
                if (!isDragging) autoRotate = true;
            }, 2000);
        });

        // Touch events for mobile
        globeCanvas.addEventListener('touchstart', (e) => {
            isDragging = true;
            autoRotate = false;
            const touch = e.touches[0];
            previousMousePosition = { x: touch.clientX, y: touch.clientY };
        });

        globeCanvas.addEventListener('touchmove', (e) => {
            if (isDragging) {
                const touch = e.touches[0];
                const deltaX = touch.clientX - previousMousePosition.x;
                const deltaY = touch.clientY - previousMousePosition.y;

                targetRotationY += deltaX * 0.01;
                targetRotationX += deltaY * 0.01;

                previousMousePosition = { x: touch.clientX, y: touch.clientY };
            }
        });

        globeCanvas.addEventListener('touchend', () => {
            isDragging = false;
            setTimeout(() => {
                if (!isDragging) autoRotate = true;
            }, 2000);
        });

        // Smooth rotation interpolation
        function animate() {
            requestAnimationFrame(animate);

            if (autoRotate && !isDragging) {
                targetRotationY += autoRotateSpeed;
            }

            // Smooth interpolation
            rotationX += (targetRotationX - rotationX) * 0.1;
            rotationY += (targetRotationY - rotationY) * 0.1;

            // Apply rotation
            globe.rotation.y = rotationY;
            globe.rotation.x = rotationX;

            renderer.render(scene, camera);
        }

        // Handle resize
        function handleResize() {
            const container = globeCanvas.parentElement;
            const width = container.clientWidth;
            const height = container.clientHeight;
            
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        }

        window.addEventListener('resize', handleResize);
        handleResize();
        animate();
    }

    // 5. Testimonials Carousel
    const carousel = document.querySelector('.testimonials-carousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.carousel-dots');
    
    if (carousel && prevBtn && nextBtn) {
        const reviews = carousel.querySelectorAll('.review-box');
        const totalItems = reviews.length;
        
        function getItemsPerView() {
            if (window.innerWidth <= 560) {
                return 1; // Mobile: 1 card
            } else if (window.innerWidth <= 992) {
                return 2; // Tablet: 2 cards
            } else {
                return 3; // Desktop: 3 cards
            }
        }
        
        function getTotalSlides() {
            return Math.ceil(totalItems / getItemsPerView());
        }
        
        let currentIndex = 0;

        // Create dots (one per slide, not per item)
        function createDots() {
            dotsContainer.innerHTML = '';
            const totalSlides = getTotalSlides();
            for (let i = 0; i < totalSlides; i++) {
                const dot = document.createElement('div');
                dot.classList.add('carousel-dot');
                if (i === 0) dot.classList.add('active');
                dot.addEventListener('click', () => goToSlide(i));
                dotsContainer.appendChild(dot);
            }
            return dotsContainer.querySelectorAll('.carousel-dot');
        }
        
        let dots = createDots();

        function updateCarousel() {
            const itemsPerView = getItemsPerView();
            const gap = 40;
            const wrapper = document.querySelector('.testimonials-carousel-wrapper');
            
            let slideWidth;
            if (itemsPerView === 3 && reviews.length > 0) {
                // For 3 items: use wrapper width to ensure all 3 cards fit
                if (wrapper) {
                    slideWidth = wrapper.getBoundingClientRect().width;
                } else {
                    const firstItem = reviews[0];
                    if (firstItem) {
                        const itemWidth = firstItem.offsetWidth;
                        // 3 cards + 2 gaps
                        slideWidth = (itemWidth * 3) + (gap * 2);
                    } else {
                        slideWidth = carousel.offsetWidth;
                    }
                }
            } else if (itemsPerView === 2 && reviews.length > 0) {
                // For 2 items (tablet): use wrapper width to ensure both cards fit
                if (wrapper) {
                    slideWidth = wrapper.getBoundingClientRect().width;
                } else {
                    const firstItem = reviews[0];
                    if (firstItem) {
                        const itemWidth = firstItem.offsetWidth;
                        // 2 cards + 1 gap
                        slideWidth = (itemWidth * 2) + gap;
                    } else {
                        slideWidth = carousel.offsetWidth;
                    }
                }
            } else if (itemsPerView === 1) {
                // For 1 item (mobile): use wrapper width to ensure card is centered
                if (wrapper) {
                    slideWidth = wrapper.getBoundingClientRect().width;
                } else {
                    const firstItem = reviews[0];
                    if (firstItem) {
                        slideWidth = firstItem.offsetWidth;
                    } else {
                        slideWidth = carousel.offsetWidth;
                    }
                }
            } else {
                // Fallback
                slideWidth = wrapper ? wrapper.getBoundingClientRect().width : carousel.offsetWidth;
            }
            
            const translateX = currentIndex * slideWidth;
            carousel.style.transform = `translateX(-${translateX}px)`;
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        function goToSlide(index) {
            const totalSlides = getTotalSlides();
            currentIndex = Math.max(0, Math.min(index, totalSlides - 1));
            updateCarousel();
        }

        function nextSlide() {
            const totalSlides = getTotalSlides();
            if (currentIndex < totalSlides - 1) {
                currentIndex++;
            } else {
                currentIndex = 0; // Loop back to start
            }
            updateCarousel();
        }

        function prevSlide() {
            const totalSlides = getTotalSlides();
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = totalSlides - 1; // Loop to end
            }
            updateCarousel();
        }

        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        // Auto-play (optional)
        let autoPlayInterval = setInterval(nextSlide, 5000);

        // Pause on hover
        const carouselWrapper = document.querySelector('.testimonials-carousel-wrapper');
        if (carouselWrapper) {
            carouselWrapper.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
            carouselWrapper.addEventListener('mouseleave', () => {
                autoPlayInterval = setInterval(nextSlide, 5000);
            });
        }

        // Initial update
        updateCarousel();

        // Update on resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                dots = createDots();
                const totalSlides = getTotalSlides();
                if (currentIndex >= totalSlides) {
                    currentIndex = totalSlides - 1;
                }
                updateCarousel();
            }, 250);
        });
    }
});
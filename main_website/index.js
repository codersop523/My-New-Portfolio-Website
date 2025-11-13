

//         document.addEventListener('DOMContentLoaded', function() {
//     // ... (Your existing code for particlesJS, hamburger menu, etc.) ...
    

//     // --- 1. Particle.js Background Animation ---
//     particlesJS("particles-js", {
//         "particles": {
//             "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
//             "color": { "value": "#ffffff" },
//             "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" } },
//             "opacity": { "value": 0.5, "random": false, "anim": { "enable": false } },
//             "size": { "value": 3, "random": true, "anim": { "enable": false } },
//             "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
//             "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
//         },
//         "interactivity": {
//             "detect_on": "canvas",
//             "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
//             "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 1 } }, "bubble": {}, "repulse": {}, "push": { "particles_nb": 4 }, "remove": {} }
//         },
//         "retina_detect": true
//     });

//     // --- 2. Hamburger Menu Logic (Unchanged) ---
//     const hamburger = document.querySelector('.hamburger');
//     const navLinks = document.querySelector('.nav-links');

//     hamburger.addEventListener('click', () => {
//         navLinks.classList.toggle('active');
//         hamburger.classList.toggle('active');
//     });

//     document.querySelectorAll('.nav-links li a').forEach(link => {
//         link.addEventListener('click', () => {
//             navLinks.classList.remove('active');
//             hamburger.classList.remove('active');
//         });
//     });



// // --- 3. Scroll-Triggered Animations for Sections ---

// // Select all the components we want to animate
// const animatedComponents = document.querySelectorAll('.animated-component');

// // Options for the observer
// const observerOptions = {
//     root: null, // Use the viewport as the root
//     rootMargin: '0px',
//     threshold: 0.2 // Trigger when 20% of the element is visible
// };

// // Create the observer
// const animationObserver = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//         // If the element is in the viewport
//         if (entry.isIntersecting) {
//             entry.target.classList.add('is-visible'); // Add our 'is-visible' class
//             observer.unobserve(entry.target); // Stop observing it after animation
//         }
//     });
// }, observerOptions);

// // Start observing each animated component
// animatedComponents.forEach(component => {
//     animationObserver.observe(component);
// });

// // --- 4. Project Slider & Modal Logic ---

// // Dummy project data (replace with your actual project details)
// const projectData = {
//     project1: {
//         title: "My First Portfolio Website",
//         video: "../video/my first portfolio website.mp4", // Full video for modal
//         description: "This is my first personal portfolio website, designed to showcase my web development skills and creative projects. Built with a responsive layout, it highlights my journey in coding, design, and innovation. It serves as a digital space to share my work, learnings, and passion for building interactive web experiences.",
//         liveLink: "https://codersop523.github.io/My-Portfolio-Website/"
//     },
//     project2: {
//         title: "Drum kit",
//         video: "../video/Drum Kit.mp4",
//         description: "This interactive drum kit project features seven unique instrument sounds that can be played using either mouse clicks or keyboard keys. Built with HTML, CSS, and JavaScript, it provides a fun and engaging way to explore event handling and sound integration on the web. A perfect blend of creativity and coding!",
//         liveLink: "https://codersop523.github.io/Drum-kit/"
//     },
//     project3: {
//         title: "Test Your Memory",
//         video: "../video/test your memory.mp4",
//         description: "“Test Your Memory” is an interactive web-based memory game built with HTML, CSS, and JavaScript. The goal is simple — watch carefully, remember the color sequence, and repeat it correctly to progress! Each round adds a new color to the sequence, testing your focus, memory, and reaction time. One wrong move, and it’s game over.",
//         liveLink: "https://codersop523.github.io/Test-Your-Memory/"
//     },
//     project4: {
//         title: "Calculator",
//         video: "../video/calculator.mp4",
//         description: "This project showcases a basic calculator built with HTML, CSS, and JavaScript. It performs simple arithmetic operations with a clean and user-friendly interface. Designed to demonstrate core web development skills and functional UI design.",
//         liveLink: "https://codersop523.github.io/Calculator/"
//     },
//     // Add more project objects here
// };

// const projectModal = document.getElementById('project-modal');
// const closeButton = document.querySelector('.close-button');
// const modalVideo = document.getElementById('modal-video');
// const modalTitle = document.getElementById('modal-title');
// const modalDescription = document.getElementById('modal-description');
// const modalViewProjectBtn = document.getElementById('modal-view-project-btn');
// const projectCards = document.querySelectorAll('.project-card');

// projectCards.forEach(card => {
//     // Play video on hover (desktop only)
//     const videoThumb = card.querySelector('.project-video-thumb');
//     const videoOverlay = card.querySelector('.video-overlay');

//     if (window.innerWidth > 768) { // Only for desktop
//         card.addEventListener('mouseenter', () => {
//             videoThumb.play();
//         });
//         card.addEventListener('mouseleave', () => {
//             videoThumb.pause();
//             videoThumb.currentTime = 0; // Reset video
//         });
//     } else {
//         // For mobile, ensure thumbnail is visible and overlay is hidden
//         videoThumb.style.opacity = 1;
//         if (videoOverlay) videoOverlay.style.display = 'none';
//     }


//     card.addEventListener('click', () => {
//         const projectId = card.dataset.projectId;
//         const project = projectData[projectId];

//         if (project) {
//             modalVideo.src = project.video;
//             modalTitle.textContent = project.title;
//             modalDescription.textContent = project.description;
//             modalViewProjectBtn.href = project.liveLink;

//             projectModal.classList.add('active');
//             document.body.style.overflow = 'hidden'; // Prevent scrolling background
//             modalVideo.play(); // Auto-play video in modal
//         }
//     });
// });

// closeButton.addEventListener('click', () => {
//     projectModal.classList.remove('active');
//     document.body.style.overflow = ''; // Restore background scrolling
//     modalVideo.pause();
//     modalVideo.currentTime = 0; // Reset modal video
// });

// // Close modal if clicked outside content
// window.addEventListener('click', (event) => {
//     if (event.target == projectModal) {
//         projectModal.classList.remove('active');
//         document.body.style.overflow = '';
//         modalVideo.pause();
//         modalVideo.currentTime = 0;
//     }
// });

// // Staggered animation for individual project cards
// const projectSlider = document.querySelector('.project-slider');

// const projectCardObserverOptions = {
//     root: projectSlider, // Observe within the slider
//     rootMargin: '0px -100px 0px -100px', // Shrink the root slightly to trigger closer
//     threshold: 0.1 // Trigger when 10% of the element is visible
// };

// const projectCardObserver = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('is-visible');
//             // No unobserve here, as cards might go out of view and come back
//             // If you want them to only animate ONCE, add observer.unobserve(entry.target);
//         }
//         // else {
//         //     entry.target.classList.remove('is-visible'); // Optional: reset animation if out of view
//         // }
//     });
// }, projectCardObserverOptions);

// projectCards.forEach(card => {
//     card.classList.add('animated-component', 'fade-in-up'); // Add classes for animation
//     projectCardObserver.observe(card);
// });

// // --- 5. Testimonial Slider Logic (Updated for Pixel-Perfect Sliding) ---
// let currentSlide = 0;
// const slides = document.querySelectorAll('.testimonial-slide');
// const slider = document.querySelector('.testimonial-slider');
// const sliderWrapper = document.querySelector('.testimonial-slider-wrapper'); // Get the wrapper
// const dotsContainer = document.querySelector('.slider-dots');

// if (slides.length > 0) {
//     // 1. Create Dots
//     slides.forEach((slide, index) => {
//         const dot = document.createElement('div');
//         dot.classList.add('dot');
//         dot.setAttribute('data-index', index);
//         if (index === 0) {
//             dot.classList.add('active');
//         }
//         dot.addEventListener('click', () => {
//             goToSlide(index);
//         });
//         dotsContainer.appendChild(dot);
//     });
// }

// const dots = document.querySelectorAll('.slider-dots .dot');

// function goToSlide(slideIndex) {
//     // Get the exact pixel width of a single slide.
//     // This is the key change!
//     const slideWidth = slides[0].clientWidth; 
    
//     // Move the slider by the exact pixel amount
//     slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;

//     // Update active dot
//     dots.forEach(dot => dot.classList.remove('active'));
//     dots[slideIndex].classList.add('active');

//     currentSlide = slideIndex;
// }

// function nextSlide() {
//     let newSlide = currentSlide + 1;
//     if (newSlide >= slides.length) {
//         newSlide = 0; // Loop back to the first slide
//     }
//     goToSlide(newSlide);
// }

// // Auto-play the slider
// let slideInterval = setInterval(nextSlide, 7000);

// // Pause auto-play on hover
// sliderWrapper.addEventListener('mouseenter', () => {
//     clearInterval(slideInterval);
// });

// sliderWrapper.addEventListener('mouseleave', () => {
//     slideInterval = setInterval(nextSlide, 7000);
// });

// // Add a resize listener to recalculate the width on window resize
// window.addEventListener('resize', () => {
//     goToSlide(currentSlide);
// });

// // Initialize first slide
// goToSlide(0);

//  // Back to top button functionality
//         const backToTopBtn = document.querySelector('.back-to-top');

//         window.addEventListener('scroll', () => {
//             if (window.pageYOffset > 300) {
//                 backToTopBtn.classList.add('visible');
//             } else {
//                 backToTopBtn.classList.remove('visible');
//             }
//         });

//         // ...existing code...
//         function scrollToTop(){
//             window.scrollTo({
//                 top: 0,
//                 behavior: 'smooth'
//             });
//         }

//         // Add this line to use the function when the button is clicked
//         backToTopBtn.addEventListener('click', scrollToTop);
// // ...existing code...

    

//     // --- End of script.js ---
// });
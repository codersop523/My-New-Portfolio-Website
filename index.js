document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Particle.js Background Animation ---
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#ffffff" },
            "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" } },
            "opacity": { "value": 0.5, "random": false, "anim": { "enable": false } },
            "size": { "value": 3, "random": true, "anim": { "enable": false } },
            "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
            "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
            "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 1 } }, "bubble": {}, "repulse": {}, "push": { "particles_nb": 4 }, "remove": {} }
        },
        "retina_detect": true
    });

    // --- 2. Typewriter Effect ---
    const subtitleElement = document.getElementById('subtitle');
    // IMPORTANT: Change this text to your desired subtitle
    const textToType = "An aspiring Full Stack Developer passionate about building sleek web experiences.";
    let charIndex = 0;

    // We wait for the heading animation to finish before starting to type
    setTimeout(() => {
        function typeWriter() {
            if (charIndex < textToType.length) {
                subtitleElement.textContent += textToType.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 50); // Speed of typing in milliseconds
            } else {
                // Remove the blinking cursor after typing is complete
                subtitleElement.style.borderRight = 'none';
                subtitleElement.classList.remove('typing');
            }
        }
        typeWriter();
    }, 2800); // This delay should be after the heading animations complete


    // --- 3. Exit Animation on Button Click ---
    const ctaButton = document.getElementById('cta-button');
    const welcomeContainer = document.getElementById('welcome-container');

    ctaButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the link from navigating immediately
        const destination = this.href;

        // Add the 'exiting' class to trigger the CSS animation
        welcomeContainer.classList.add('exiting');

        // Wait for the animation to finish (1000ms = 1s), then navigate
        setTimeout(() => {
            window.location.href = destination;
        }, 1000);
    });
});
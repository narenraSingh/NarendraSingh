document.addEventListener('DOMContentLoaded', function () {
    // Particles.js configuration
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#cccccc"
            },
            "shape": {
                "type": "circle"
            },
            "opacity": {
                "value": 0.5
            },
            "size": {
                "value": 3
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#cccccc",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 4,
                "direction": "none",
                "out_mode": "out"
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                }
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    });

    // Hamburger menu toggle
    const hamburger = document.getElementById("hamburger-lines");
    const popupNav = document.getElementById("popup-nav");

    hamburger.addEventListener("click", function(event) {
        event.stopPropagation();
        hamburger.classList.toggle("active");
        popupNav.classList.toggle("active");
    });

    window.addEventListener("click", function(event) {
        if (!hamburger.contains(event.target) && !popupNav.contains(event.target)) {
            hamburger.classList.remove("active");
            popupNav.classList.remove("active");
        }
    });

    // Go to Top button
    const goTopBtn = document.getElementById("goTopBtn");
    goTopBtn.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Go to Bottom button
    const goBottomBtn = document.getElementById("goBottomBtn");
    goBottomBtn.addEventListener("click", function() {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });

    // Back to Home Page button
    const backBtn = document.getElementById("backBtn");
    backBtn.addEventListener("click", function() {
        try {
            window.location.href = '../index.html';
        } catch (error) {
            console.error('Error navigating to home page:', error);
            alert('Unable to navigate to the home page. Please check if the file "../index.html" exists in the parent directory.');
        }
    });
});
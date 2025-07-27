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

    // Translation data (placeholder; replace with actual translations or API)
    const translations = {
        1: {
            hindi: `मुझे तसल्ली दे दे जो <br>
                    वो शब्द उधारा ढूँढ रहा है <br>
                    एक सितारा ढूँढ रहा है <br>
                    दिल सैयारा ढूँढ रहा है <br>
                    सैयारा मतलब__वो तारा जो <br>
                    एक जगह पे ना ठहरे <br>
                    फिर भी अपनी चमक ना बदले,चाल ना बदले <br>
                    और ना बदले वो चेहरे <br>
                    अम्बर जैसा एक समुद्र <br>
                    चाँद है, कश्ती पानी में <br>
                    देखो जोर जवानी में <br>
                    एक किनारा ढूँढ रहा है <br>
                    दिल सैयारा ढूँढ रहा है <br>
                    #सैयारा___❤✨`,
            english: `Give me the solace that <br>
                      I’m searching for that borrowed word <br>
                      I’m searching for a star <br>
                      My heart is searching for a Sayyara <br>
                      Sayyara means—that star which <br>
                      Doesn’t stay in one place <br>
                      Yet never changes its shine, its pace <br>
                      Nor changes those faces <br>
                      A sea like the sky <br>
                      The moon is there, the boat in water <br>
                      Look, in the vigor of youth <br>
                      I’m searching for a shore <br>
                      My heart is searching for a Sayyara <br>
                      #Sayyara___❤✨`
        },
        2: {
            hindi: `Ye ek udaharan hai shayari ka,<br>
                    Har pankti mein chhupi hai baat,<br>
                    Jazbaat ka hai yeh izhaar,<br>
                    Zindagi ka hai yeh ek rangat.`,
            english: `This is an example of shayari,<br>
                      A message hidden in every line,<br>
                      It’s an expression of emotions,<br>
                      A hue of life.`
        },
        // Add translations for Shayari 3 to 100 here
        100: {
            hindi: `Ye ek udaharan hai shayari ka,<br>
                    Har pankti mein chhupi hai baat,<br>
                    Jazbaat ka hai yeh izhaar,<br>
                    Zindagi ka hai yeh ek rangat.`,
            english: `This is an example of shayari,<br>
                      A message hidden in every line,<br>
                      It’s an expression of emotions,<br>
                      A hue of life.`
        }
    };

    // Translate button functionality
    const translateBtn = document.getElementById("translateBtn");
    translateBtn.addEventListener("click", function() {
        const shayariBoxes = document.querySelectorAll(".shayari-box");
        const isHindi = shayariBoxes[0].getAttribute("data-lang") === "hindi";
        
        shayariBoxes.forEach((box, index) => {
            const shayariNumber = index + 1;
            const p = box.querySelector("p");
            if (translations[shayariNumber]) {
                p.innerHTML = `<strong>Shayari ${shayariNumber}:</strong><br>` + 
                             (isHindi ? translations[shayariNumber].english : translations[shayariNumber].hindi);
                box.setAttribute("data-lang", isHindi ? "english" : "hindi");
            }
        });

        translateBtn.textContent = isHindi ? "Translate to Hindi" : "Translate to English";
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
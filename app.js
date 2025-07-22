const navbar = document.getElementById("hamburger-lines");
const list = document.getElementById("nav-list");
const display = document.getElementById("social-info");
const progressBar = document.querySelectorAll(".skills-progress > div");
const container = document.getElementById("skill-container");

navbar.addEventListener("click", () => {
    navbar.classList.toggle("active");
    list.classList.toggle("active");
    // Only toggle display on mobile screens
    if (window.innerWidth <= 768) {
        display.classList.toggle("active");
    }
});

const scroll = document.querySelectorAll(".scroll-links");
let smoothScroll;

scroll.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        if (element) {
            smoothScroll = setInterval(() => {
                const coordinates = element.getBoundingClientRect();
                if (coordinates.top <= 0) {
                    clearInterval(smoothScroll);
                    
                    if (window.innerWidth <= 768) {
                        navbar.classList.remove("active");
                        list.classList.remove("active");
                        if (display.classList.contains("active")) {
                            display.classList.remove("active");
                        }
                    }
                }
                window.scrollBy(0, 25);
            }, 10);
        }
    });
});

function initialBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + "%";
}

for (let bar of progressBar) {
    initialBar(bar);
}

function singleBar(bar) {
    let currentLevel = 0;
    let targetLevel = parseInt(bar.getAttribute("data-skill_level")); // Ensure integer
    let interval = setInterval(() => {
        if (currentLevel >= targetLevel) {
            clearInterval(interval);
            return;
        }
        currentLevel++;
        bar.style.width = currentLevel + "%";
    }, 5);
}

function checkScroll() {
    for (let bar of progressBar) {
        let coordinates = bar.getBoundingClientRect();
        if (
            coordinates.top <= window.innerHeight - coordinates.height &&
            bar.getAttribute("data-visited") === "false"
        ) {
            bar.setAttribute("data-visited", true);
            singleBar(bar);
        } else if (coordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialBar(bar);
        }
    }
}

window.addEventListener("scroll", checkScroll);

// Ensure initial check on page load
window.addEventListener("load", checkScroll);
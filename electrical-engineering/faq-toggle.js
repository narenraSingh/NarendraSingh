/**
 * NARENDRA SINGH WEBSITE - INTERACTIVE LOGIC
 * Handles: Sidebar Navigation & FAQ/Concept Toggles
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. SIDEBAR NAVIGATION LOGIC ---
    const hamburger = document.getElementById("hamburger-lines");
    const nav = document.getElementById("ee-nav");

    if (hamburger && nav) {
        hamburger.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevents click from bubbling to document
            nav.classList.toggle("hidden");
            hamburger.classList.toggle("active");
        });

        // Close menu if user clicks a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.add("hidden");
                hamburger.classList.remove("active");
            });
        });

        // Close menu if user clicks anywhere outside the sidebar
        document.addEventListener("click", (event) => {
            if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
                nav.classList.add("hidden");
                hamburger.classList.remove("active");
            }
        });
    }

    // --- 2. FAQ / CONCEPT ACCORDION LOGIC ---
    const faqButtons = document.querySelectorAll('.faq-toggle');

    faqButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const answer = this.nextElementSibling;

            // Toggle active class for the button (optional styling)
            this.classList.toggle('active-toggle');

            // Switch visibility
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});
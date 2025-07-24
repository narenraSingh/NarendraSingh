// Hamburger menu toggle
const hamburger = document.getElementById("hamburger-lines");
const nav = document.getElementById("ee-nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("hidden");
    hamburger.classList.toggle("active");
});

// FAQ toggle logic
const faqButtons = document.querySelectorAll('.faq-toggle');
faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const answer = btn.nextElementSibling;
        answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger-lines');
    const navList = document.getElementById('nav-list');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const progressBar = document.querySelectorAll('.skills-progress > div');
    const scrollLinks = document.querySelectorAll('.scroll-links');

    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navList.classList.toggle('active');
    });

    // Smooth scroll and close menu on link click
    scrollLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const id = e.currentTarget.getAttribute('href').slice(1);
            const element = document.getElementById(id);
            if (element) {
                if (window.innerWidth <= 768) {
                    hamburger.classList.remove('active');
                    navList.classList.remove('active');
                }
                const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 60;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Close menu for external links
    navList.querySelectorAll('a:not(.scroll-links)').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('active');
                navList.classList.remove('active');
            }
        });
    });

    // Dark mode toggle
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        darkModeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(savedTheme + '-mode');
    darkModeToggle.innerHTML = savedTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';

    // Skills progress bar animation
    function initialBar(bar) {
        bar.setAttribute('data-visited', false);
        bar.style.width = '0%';
    }

    for (let bar of progressBar) {
        initialBar(bar);
    }

    function singleBar(bar) {
        let currentLevel = 0;
        let targetLevel = parseInt(bar.getAttribute('data-skill_level'));
        let interval = setInterval(() => {
            if (currentLevel >= targetLevel) {
                clearInterval(interval);
                return;
            }
            currentLevel++;
            bar.style.width = currentLevel + '%';
        }, 15);
    }

    function checkScroll() {
        for (let bar of progressBar) {
            let coordinates = bar.getBoundingClientRect();
            if (
                coordinates.top <= window.innerHeight - coordinates.height &&
                bar.getAttribute('data-visited') === 'false'
            ) {
                bar.setAttribute('data-visited', true);
                singleBar(bar);
            } else if (coordinates.top > window.innerHeight) {
                bar.setAttribute('data-visited', false);
                initialBar(bar);
            }
        }
    }

    window.addEventListener('scroll', checkScroll);
    window.addEventListener('load', checkScroll);
});
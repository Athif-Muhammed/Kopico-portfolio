// Entrance Animation Management
document.addEventListener('DOMContentLoaded', () => {
    // Select elements to animate
    const profileCard = document.querySelector('.profile-card');
    const links = document.querySelectorAll('.link-card');
    const footer = document.querySelector('footer');

    // Add classes with stagger
    profileCard.classList.add('slide-up');
    profileCard.style.animationDelay = '0.1s';

    links.forEach((link, index) => {
        link.classList.add('slide-up');
        link.style.animationDelay = `${0.2 + (index * 0.1)}s`;
    });

    footer.classList.add('slide-up');
    footer.style.animationDelay = `${0.2 + (links.length * 0.1)}s`;

    // Initialize Vanilla Tilt if available
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
            max: 5,
            speed: 400,
            glare: true,
            "max-glare": 0.2,
            scale: 1.02,
            gyroscope: true
        });
    }
});

// Add simple cursor effect if desired


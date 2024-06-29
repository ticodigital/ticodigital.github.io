// assets/js/scripts.js

document.addEventListener("DOMContentLoaded", () => {
    // Toggle mobile menu
    const nav = document.querySelector('nav');
    const toggleButton = document.createElement('button');
    toggleButton.textContent = '☰';
    toggleButton.style.fontSize = '1.5rem';
    toggleButton.style.background = 'none';
    toggleButton.style.border = 'none';
    toggleButton.style.color = '#fff';
    toggleButton.style.cursor = 'pointer';
    toggleButton.style.marginLeft = '10px';

    nav.insertBefore(toggleButton, nav.firstChild);

    toggleButton.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    // Responsive adjustments
    const handleResize = () => {
        if (window.innerWidth > 768) {
            nav.classList.remove('open');
        }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

/* CSS for responsive nav */
const style = document.createElement('style');
style.textContent = `
    nav.open a {
        display: block;
        padding: 10px;
        text-align: center;
    }

    @media (max-width: 768px) {
        nav a {
            display: none;
        }

        nav.open a {
            display: block;
        }

        nav {
            position: absolute;
            background: #333;
            top: 60px;
            width: 100%;
            text-align: center;
            transition: all 0.3s ease;
        }
    }
`;
document.head.append(style);

document.addEventListener('DOMContentLoaded', () => {
    // 1. Indestructible Nav Logic
    const navWrapper = document.querySelector('.nav-wrapper');
    const updateNav = () => {
        if (window.scrollY > 50) {
            navWrapper.classList.add('scrolled');
        } else {
            navWrapper.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', updateNav);
    updateNav();

    // 2. High-Precision Reveal Observer
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // 3. Magnetic Interaction for Premium Buttons
    const magneticElements = document.querySelectorAll('.btn-primary');
    magneticElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = 'translate(0, 0)';
        });
    });

    // 4. Blueprint Parallax Effect
    const visual = document.querySelector('.hero-visual');
    if (visual) {
        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX - window.innerWidth / 2) * 0.015;
            const y = (e.clientY - window.innerHeight / 2) * 0.015;
            visual.style.transform = `translate(${x}px, ${y}px)`;
        });
    }

    // 5. Smooth Internal Navigation with Clearance Offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);

            if (target) {
                const navHeight = 120; // Clearance for fixed nav
                const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPos,
                    behavior: 'smooth'
                });
            }
        });
    });
});

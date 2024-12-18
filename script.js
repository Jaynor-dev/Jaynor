window.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.content-section'); 
    const navLinks = document.querySelectorAll('.nav-buttons a'); 

    const isInViewport = (section) => {
        const rect = section.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight; 
    };

    const handleScroll = () => {
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('visible');
            }
        });
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 
            const targetId = link.getAttribute('href').substring(1); 
            const targetSection = document.getElementById(targetId); 
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        });
    });

    window.addEventListener('scroll', handleScroll);

    handleScroll();
});

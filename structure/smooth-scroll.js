// Smooth scrolling and animations
document.addEventListener('DOMContentLoaded', function() {
    
    // Navigation smooth scrolling
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    const sections = document.querySelectorAll('section[id]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Smooth scroll to section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active navigation
                updateActiveNav(this);
                
                // Trigger section animation
                animateSection(targetSection);
            }
        });
    });
    
    // Update active navigation state
    function updateActiveNav(activeLink) {
        navLinks.forEach(link => link.classList.remove('active'));
        activeLink.classList.add('active');
    }
    
    // Animate section on scroll
    function animateSection(section) {
        const cards = section.querySelectorAll('.event-card, .club-card, .dashboard-card, .admin-card');
        
        // Add animation classes
        section.classList.add('section-animate', 'active');
        
        // Stagger card animations
        cards.forEach((card, index) => {
            card.classList.add('animate-card');
            setTimeout(() => {
                card.classList.add('show');
            }, index * 100);
        });
    }
    
    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;
                animateSection(section);
                
                // Update navigation based on visible section
                const sectionId = section.getAttribute('id');
                const correspondingNav = document.querySelector(`nav a[href="#${sectionId}"]`);
                if (correspondingNav) {
                    updateActiveNav(correspondingNav);
                }
            }
        });
    }, observerOptions);
    
    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Enhanced button animations
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(0) scale(0.95)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
    });
    
    // Form animations
    const formInputs = document.querySelectorAll('input, textarea, select');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 5px 15px rgba(255, 0, 102, 0.3)';
        });
        
        input.addEventListener('blur', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Card hover effects
    const cards = document.querySelectorAll('.event-card, .club-card, .dashboard-card, .admin-card, .stat-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(255, 0, 102, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Initialize first section
    const homeSection = document.getElementById('home');
    if (homeSection) {
        animateSection(homeSection);
    }
    
    // Search functionality with animation
    const searchInputs = document.querySelectorAll('#event-search, #club-search');
    searchInputs.forEach(input => {
        input.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const cards = this.closest('section').querySelectorAll('.event-card, .club-card');
            
            cards.forEach(card => {
                const text = card.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.5s ease-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Filter functionality
    const filterSelects = document.querySelectorAll('#event-filter, #club-filter');
    filterSelects.forEach(select => {
        select.addEventListener('change', function() {
            const filterValue = this.value.toLowerCase();
            const cards = this.closest('section').querySelectorAll('.event-card, .club-card');
            
            cards.forEach(card => {
                if (filterValue === '' || card.textContent.toLowerCase().includes(filterValue)) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.5s ease-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

// Additional smooth scroll for hero buttons
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}
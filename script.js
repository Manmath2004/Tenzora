// JavaScript code for script.js
// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log('Form submitted:', data);
}

// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});

document.querySelectorAll('.animate').forEach((el) => observer.observe(el));

// Add hover effects
document.querySelectorAll('.hover-effect').forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.transform = 'scale(1.05)';
        element.style.transition = 'all 0.3s ease';
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.transform = 'scale(1)';
    });
});

// Dynamic theme switching
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// Initialize theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}

// Add loading animations
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

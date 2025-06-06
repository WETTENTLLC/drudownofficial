// Main JavaScript for Dru Down Website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Contact form validation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        let valid = true;
        // Name validation
        const name = document.getElementById('name');
        const nameError = document.getElementById('name-error');
        if (name.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            valid = false;
        } else {
            nameError.textContent = '';
        }
        // Email validation
        const email = document.getElementById('email');
        const emailError = document.getElementById('email-error');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            emailError.textContent = 'Enter a valid email.';
            valid = false;
        } else {
            emailError.textContent = '';
        }
        // Message validation
        const message = document.getElementById('message');
        const messageError = document.getElementById('message-error');
        if (message.value.trim() === '') {
            messageError.textContent = 'Message is required.';
            valid = false;
        } else {
            messageError.textContent = '';
        }
        if (!valid) {
            e.preventDefault();
        }
    });
});

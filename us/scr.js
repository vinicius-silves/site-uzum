// script.js
// Add event listeners to sections to toggle visibility
document.querySelectorAll('section').forEach(section => {
    section.addEventListener('click', () => {
        section.classList.toggle('visible');
    });
});
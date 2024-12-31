// Smooth Scroll for Navigation
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Poem Page Fade-In Effect
window.onload = function() {
    const poems = document.querySelectorAll('main p');
    poems.forEach((poem, index) => {
        setTimeout(() => {
            poem.style.opacity = 1;
            poem.style.transition = 'opacity 2s ease';
        }, index * 1000);
    });
};

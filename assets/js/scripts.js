document.querySelectorAll('.carousel-next').forEach(button => {
    button.addEventListener('click', () => {
        const carousel = button.parentNode.querySelector('.carousel-inner');
        carousel.scrollBy({ left: 300, behavior: 'smooth' });
    });
});

window.addEventListener('scroll', () => {
    const dino = document.querySelector('.dino');
    const scrollY = window.scrollY;

    if (scrollY > 50) {
        dino.classList.add('dark');
    }
    else {
        dino.classList.remove('dark');
    }
});
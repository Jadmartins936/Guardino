window.addEventListener('scroll', () => {
    const dino = document.querySelector('.dino');
    const scrollY = window.scrollY;

    if (scrollY > 30) {
        dino.classList.add('dark');
    }
    else {
        dino.classList.remove('dark');
    }
});

const comentarios = document.querySelectorAll('.comentario');

comentarios.forEach(comentario => {
    comentario.addEventListener('mouseover', () => {
        comentario.style.backgroundColor = '#lightgray'; 
    });

    comentario.addEventListener('mouseout', () => {
        comentario.style.backgroundColor = '#f0f0f0';
    });
});
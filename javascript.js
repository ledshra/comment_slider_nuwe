const comments = document.querySelectorAll('.comment');
let currentIndex = 0;

function showComment(index) {
    comments.forEach((comment, i) => {
        comment.style.display = i === index ? 'block' : 'none';
    });
}

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % comments.length;
    showComment(currentIndex);
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + comments.length) % comments.length;
    showComment(currentIndex);
});

// Mostrar el primer comentario al cargar la página
showComment(currentIndex);
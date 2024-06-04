const thumbnails = document.querySelectorAll('.cuadros img');
const fullScreenView = document.querySelector('.full-screen-view');
const fullImage = document.getElementById('full-image');
const closeBtn = document.querySelector('.close-btn');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        fullImage.src = thumbnail.src;
        fullScreenView.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    fullScreenView.style.display = 'none';
});
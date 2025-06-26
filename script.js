// Loader: cache la div loader quand la page est chargée
window.addEventListener('load', () => {
  const loaderWrapper = document.querySelector('.loader-wrapper');
  loaderWrapper.style.opacity = '0';
  setTimeout(() => {
    loaderWrapper.style.display = 'none';
  }, 600);
});

// Lightbox: ouvrir et fermer l’image agrandie
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

document.querySelectorAll('.zoomable').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.add('visible');
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('visible');
});

// Fermer la lightbox si clic en dehors de l'image
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('visible');
  }
});

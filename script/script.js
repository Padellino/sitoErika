document.addEventListener("DOMContentLoaded", function () {

  const button = document.querySelector(".showreel-btn");
  const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("modalVideo");

  const player = new Vimeo.Player(iframe);

  // APERTURA
  button.addEventListener("click", function (e) {
    e.preventDefault(); // 🔥 blocca salto ancora

    modal.classList.add("active");
    document.body.style.overflow = "hidden";

    player.play();
  });

  // CHIUSURA clic fuori dal contenuto
  modal.addEventListener("click", function (e) {
    if (!iframe.contains(e.target)) {
      closeModal();
    }
  });

  // CHIUSURA con ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  function closeModal() {
    modal.classList.remove("active");

    player.pause().then(function () {
      player.setCurrentTime(0);
    });

    document.body.style.overflow = "auto";
  }

});

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const lightbox = document.getElementById('lightbox');
  const iframe = lightbox.querySelector('iframe');
  const close = lightbox.querySelector('.close');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const videoId = card.getAttribute('data-video');
      const platform = card.getAttribute('data-platform');

      let videoUrl = '';

      if (platform === 'youtube') {
        videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      }

      if (platform === 'vimeo') {
        videoUrl = `https://player.vimeo.com/video/${videoId}?autoplay=1`;
      }

      iframe.src = videoUrl;
      lightbox.style.display = 'flex';
    });
  });

  function closeLightbox() {
    iframe.src = '';
    lightbox.style.display = 'none';
  }

  close.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
});
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
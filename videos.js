/* ================================
   PLAYER PLYR
================================ */
let player = null;

function iniciarPlayer() {
  if (!player) {
    player = new Plyr('#player', {
      controls: [
        'play', 'progress', 'current-time',
        'mute', 'volume', 'fullscreen'
      ],
      ratio: '16:9',
      clickToPlay: true
    });
  }
}

/* ================================
   ELEMENTOS
================================ */
const overlay = document.getElementById("video-overlay");
const playerSrc = document.getElementById("player-src");
const fecharBtn = document.getElementById("video-fechar");

/* ================================
   ABRIR VÍDEO
================================ */
function abrirVideo(caminho) {

  // Mostra overlay fullscreen
  overlay.style.display = "flex";

  // Esconde interface da mesa
  //document.getElementById("mesa").style.visibility = "hidden";
  //document.getElementById("video-container").style.visibility = "hidden";
  //document.getElementById("btn-voltar").style.visibility = "hidden";

  iniciarPlayer();

  player.source = {
    type: 'video',
    sources: [{ src: caminho, type: 'video/mp4' }]
  };

  // Aguarda Plyr atualizar o vídeo
  setTimeout(() => player.play(), 100);
}

/* ================================
   FECHAR VÍDEO
================================ */
fecharBtn.addEventListener("click", () => {

  overlay.style.display = "none";

  // Restaura interface da mesa
  document.getElementById("mesa").style.visibility = "visible";
  document.getElementById("video-container").style.visibility = "visible";
  document.getElementById("btn-voltar").style.visibility = "visible";

  player.pause();
});

/* ================================
   PILHA DE VIDEOS
================================ */
// ELEMENTOS
const video01 = document.getElementById("video01");
const video02 = document.getElementById("video02");

video01.addEventListener("click", () => {
    abrirVideo(video01.dataset.video);
  });

video02.addEventListener("click", () => {
    abrirVideo(video02.dataset.video);
  });


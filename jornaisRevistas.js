// LISTA DE REVISTAS COM SUAS IMAGENS
const revistas = {
  1: ["img/manual1_pag1.jpg", "img/manual1_pag2.jpg", "img/manual1_pag3.jpg"],
  2: ["img/revista1_pag1.jpg", "img/revista1_pag2.jpg", "img/revista1_pag3.jpg"],
  3: ["img/revista2_pag1.jpg", "img/revista2_pag2.jpg", "img/revista2_pag3.jpg"]
};

let revistaAtual = 0;
let paginaAtual = 0;

const jornalAbertoFundo = document.getElementById("jornalAberto");
const abrirjornaisRevistas01= document.getElementById("abrir-jornaisRevistas01");
const abrirjornaisRevistas02= document.getElementById("abrir-jornaisRevistas02");
const abrirjornaisRevistas03= document.getElementById("abrir-jornaisRevistas03");

const pagina = document.getElementById("IMGpaginaJR");


// CARREGAR IMAGENS DAS PÁGINAS
function carregarPaginas() {
  pagina.src = revistas[revistaAtual][paginaAtual] || "";

  const btnPrev = document.getElementById("btnJR-prev");
  const btnNext = document.getElementById("btnJR-next");
  
  const containerPagina = document.querySelector(".paginaJR");

  // volta o scroll para o topo
  if (containerPagina) {
    containerPagina.scrollTop = 0;
  }
  
  // Se está no início, esconde seta esquerda
  if (paginaAtual === 0) {
    btnPrev.style.display = "none";
  } else {
    btnPrev.style.display = "block";
  }

  // Se chegou na última página, esconde seta direita
  if (paginaAtual >= revistas[revistaAtual].length - 1) {
    btnNext.style.display = "none";
  } else {
    btnNext.style.display = "block";
  }
}

document.querySelector(".paginaJR").scrollBy({
  top: 400,
  behavior: "smooth"
});

// NAVEGAÇÃO
document.getElementById("btnJR-next").addEventListener("click", () => {
  if (paginaAtual < revistas[revistaAtual].length - 1) {
    paginaAtual += 1;
    carregarPaginas();
  }
});

document.getElementById("btnJR-prev").addEventListener("click", () => {
  if (paginaAtual >= 1) {
    paginaAtual -= 1;
    carregarPaginas();
  }
});

document.getElementById("btn-fecharJR").addEventListener("click", () => {
  jornalAbertoFundo.style.display = "none";
  abrirjornaisRevistas01.style.display = "block";
  abrirjornaisRevistas02.style.display = "block";
  abrirjornaisRevistas03.style.display = "block";
  
});

document.getElementById("abrir-jornaisRevistas01").addEventListener("click", function(e){
  console.log("abrir-jornaisRevistas01");
  e.preventDefault();
  jornalAbertoFundo.style.display = "block";
  abrirjornaisRevistas01.style.display = "none";
  abrirjornaisRevistas02.style.display = "none";
  abrirjornaisRevistas03.style.display = "none";
  revistaAtual = 1;
  paginaAtual = 0;
  carregarPaginas();

});


document.getElementById("abrir-jornaisRevistas02").addEventListener("click", function(e){
  console.log("abrir-jornaisRevistas02");
  e.preventDefault();
  jornalAbertoFundo.style.display = "block";
  abrirjornaisRevistas01.style.display = "none";
  abrirjornaisRevistas02.style.display = "none";
  abrirjornaisRevistas03.style.display = "none";
  revistaAtual = 2;
  paginaAtual = 0;
  carregarPaginas();

});


document.getElementById("abrir-jornaisRevistas03").addEventListener("click", function(e){
  console.log("abrir-jornaisRevistas04");
  e.preventDefault();
  jornalAbertoFundo.style.display = "block";
  abrirjornaisRevistas01.style.display = "none";
  abrirjornaisRevistas02.style.display = "none";
  abrirjornaisRevistas03.style.display = "none";
  revistaAtual = 3;
  paginaAtual = 0;
  carregarPaginas();

});


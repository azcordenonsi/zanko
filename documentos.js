// LISTA DE CASOS COM SUAS IMAGENS
const casos = {
  1: ["img/caso1_pag1.png", "img/caso1_pag2.png"],
  2: ["img/caso3_pag1.png", "img/caso3_pag2.png", "img/caso3_pag3.png", "img/caso3_pag4.png", "img/caso3_pag5.png", "img/caso3_pag6.png", "img/caso3_pag7.png", "img/caso3_pag8.png"]
};

let casoAtual = 0;
let paginaAtual = 0;

// ELEMENTOS
const listaCasos = document.getElementById("lista-casos");
const pastaAberta = document.getElementById("pasta-aberta");
const paginaEsq = document.getElementById("pagina-esq");
const paginaDir = document.getElementById("pagina-dir");
const abrirArquivos = document.getElementById("abrir-arquivos");
const btnFechar = document.getElementById("btn-fechar-caso");

// ABRIR CASO
document.querySelectorAll(".caso").forEach(area => {
  area.addEventListener("click", () => {
    casoAtual = Number(area.dataset.caso);
    paginaAtual = 0;

    listaCasos.style.display = "none";
    pastaAberta.style.display = "block";

    carregarPaginas();
  });
});


// FECHAR PASTA 
document.getElementById("btn-fechar-caso").addEventListener("click", () => {
 	  listaCasos.style.display = "none";
	  pastaAberta.style.display = "none";
	  abrirArquivos.style.display = "block";
	  btnFechar.style.display = "none";

});

// NAVEGAÇÃO
document.getElementById("btn-next").addEventListener("click", () => {
  if (paginaAtual < casos[casoAtual].length - 2) {
    paginaAtual += 2;
    carregarPaginas();
  }
});

document.getElementById("btn-prev").addEventListener("click", () => {
  if (paginaAtual >= 2) {
    paginaAtual -= 2;
    carregarPaginas();
  }
});

// CARREGAR IMAGENS DAS PÁGINAS
function carregarPaginas() {
  paginaEsq.src = casos[casoAtual][paginaAtual] || "";
  paginaDir.src = casos[casoAtual][paginaAtual + 1] || "";

  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");

  // Se está no início, esconde seta esquerda
  if (paginaAtual === 0) {
    btnPrev.style.display = "none";
  } else {
    btnPrev.style.display = "block";
  }

  // Se chegou na última página, esconde seta direita
  if (paginaAtual >= casos[casoAtual].length - 2) {
    btnNext.style.display = "none";
  } else {
    btnNext.style.display = "block";
  }
}

document.getElementById("abrir-arquivos").addEventListener("click", function(e){

  e.preventDefault();
  listaCasos.style.display = "block";
  btnFechar.style.display = "block";
  abrirArquivos.style.display ="none";
  

  setTimeout(()=>{
    lista.style.opacity = "1";
  },10);

});


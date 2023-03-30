// ==========================ids HTML===========================
const $divCor = document.querySelector("#divCor");
const $historico = document.querySelector("#historico");
const $opcoes = document.querySelector("#opcoes");
const $divVidas = document.querySelector("#divVidas");
const $popupFundo = document.querySelector("#popupFundo");
const $btnReset = document.querySelector("#btnReset");

// ==========================functions==========================

// randomiza as cores
function random() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);

  var corEscolhida = `${r}, ${g}, ${b}`;
  return corEscolhida;
}
// =============================================================
function opcoesErradas() {
  for (var opcId = 0; opcId <= 5; opcId++) {
    document.querySelector(`#opc${opcId}`).innerHTML = random();
    document.querySelector(`#opc${opcId}`).style.backgroundColor = "";
    document.querySelector(`#opc${opcId}`).style.color = "#000";
  }
}

// =============================================================
let idVidas = 3;
function animOpcaoErrda(e) {
  e.target.style.backgroundColor = "crimson";
  e.target.style.color = "#fff";
  setTimeout(function () {
    e.target.style.backgroundColor = "transparent";
    e.target.style.color = "transparent";
    e.target.style.pointerEvents = "none";
  }, 500);

  document.querySelector(`#vida${idVidas}`).style.display = "none";
  idVidas--;

  if (idVidas == 0) {
    $popupFundo.style.display = "block";
  }
}

// =============================================================
function respostaCerta() {
  const corFixa = random();
  $divCor.style.background = `rgb(${corFixa})`;
  opcoesErradas();

  var opcCerta = Math.floor(Math.random() * 5);
  document.querySelector(`#opc${opcCerta}`).innerHTML = corFixa;
}

// =============================================================
function animacaoAcerto(e) {
  e.target.style.background = $divCor.style.background;
  setTimeout(() => {
    hist();
    respostaCerta();
    e.target.style.backgroundColor = "";
  }, 500);
  for (i = 0; i <= 5; i++) {
    document.querySelector(`#opc${i}`).style.pointerEvents = "";
  }
}

// ========================começa o jogo========================
respostaCerta();

// analiza as opçoes
$opcoes.addEventListener("click", (e) => {
  if (e.target.className === "btnResp") {
    if ($divCor.style.background === `rgb(${e.target.textContent})`) {
      animacaoAcerto(e);
      if (idVidas != 3) {
        idVidas++;
        document.querySelector(`#vida${idVidas}`).style.display = "";
      }
    } else {
      animOpcaoErrda(e);
    }
  }
});

$btnReset.addEventListener("click", () => {
  respostaCerta();
  $popupFundo.style.display = "none";
  idVidas = 3;
  for (i = 1; i <= 3; i++) {
    document.querySelector(`#vida${i}`).style.display = "";
  }
  for (i = 0; i <= 5; i++) {
    document.querySelector(`#opc${i}`).style.pointerEvents = "";
  }
});

// =======================area de registo=======================

function hist() {
  const rgb = $divCor.style.background;
  const span = document.createElement("span");
  span.classList.add("spanBlock");
  const spanCont = `
    <div class=corHist style="background: ${rgb}"></div>
  ${rgb.slice(4, -1)}`;
  $historico.appendChild(span);
  span.innerHTML = spanCont;
}

// copia
$historico.addEventListener("click", (e) => {
  if (e.target.className == "corHist") {
    let copy = e.target.style.backgroundColor.slice(4, -1);
    navigator.clipboard.writeText(copy);
    alert("rgb copiado " + copy);
  }
});

// ==========================ids HTML===========================
const $divCor = document.querySelector("#divCor");
const $historico = document.querySelector("#historico");
// Linha_21, Linha_33

// ============================gears============================

// randomiza as cores
function random() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);

  var corEscolhida = `${r}, ${g}, ${b}`;
  return corEscolhida;
}

// escreve as opçcoes
function textOpc() {
  for (var opcId = 0; opcId <= 5; opcId++) {
    document.querySelector(`#opc${opcId}`).innerHTML = random();
  }
}

// ========================começa o jogo========================

function respostaCerta() {
  const corFixa = random();
  $divCor.style.background = `rgb(${corFixa})`;
  textOpc();

  var opcCerta = Math.floor(Math.random() * 5);
  document.querySelector(`#opc${opcCerta}`).innerHTML = corFixa;
}
respostaCerta();

// analiza as opçoes
document.addEventListener("click", (e) => {
  if ($divCor.style.background === `rgb(${e.target.textContent})`) {
    e.target.style.background = $divCor.style.background;
    setTimeout(() => {
      hist();
      respostaCerta();
      e.target.style.backgroundColor = "";
    }, 1000);
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
    navigator.clipboard.writeText(copy)
    alert('rgb copiado '+ copy )
  }
});

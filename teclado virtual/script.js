// ==========================ids html===========================
const $txtArea = document.querySelector("#txtArea");
const $btnTec = document.querySelector("#btnTec");
const $tecla = document.querySelector(".tecla");
const $teclado = document.querySelector("#teclado");

// ========================abre o teclado=======================
var tecladoAberto = false;
$btnTec.addEventListener("click", () => {
  if (!tecladoAberto) {
    $teclado.style.display = "flex";
    $btnTec.textContent = "FECHAR TECLADO";
    tecladoAberto = true;
  } else {
    $teclado.style.display = "none";
    $btnTec.textContent = "ABRIR TECLADO";
    tecladoAberto = false;
  }
});

// =======================faz ele escrever======================
function escreve(e) {
  const clicado = e.target;
  if (clicado.id == "del") {
    var content = $txtArea.textContent;
    $txtArea.textContent = content.slice(0, -1);
  } else {
    if (clicado.id == "space") {
      $txtArea.textContent += " ";
    } else {
      if (clicado.className == "tecla") {
        $txtArea.textContent += clicado.textContent;
      }
    }
  }
}

$teclado.addEventListener("click", (e) => {
  escreve(e);
});

// ===============qnd mantem uma tecla precionada===============


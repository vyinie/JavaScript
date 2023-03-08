var seg = 0;
var min = 0;
var hor = 0;
var contando_tempo = false;

// inicia a função que roda tudo
function iniciar() {
  if (contando_tempo === false) {
    document.getElementById("iniciar").textContent = "Pausar";
    contar();
    tempo = setInterval(contar, 1000);
    contando_tempo = true;
  } else {
    pausar();
    contando_tempo = false;
  }
}

// faz os numeros com 1 digito terem um "0" antes
function tela(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}

// função que roda tudo
function contar() {
  if (seg < 60) {
    seg++;
    if (seg == 60) {
      seg = 0;
      min++;
      if (min == 60) {
        min = 0;
        hor++;
      }
    }
  }
  document.getElementById("tela").innerHTML = `${tela(hor)}:${tela(min)}:${tela(seg)}`;
}

// pausa
function pausar() {
  document.getElementById("iniciar").textContent = "Iniciar";
  clearInterval(tempo);
  contando_tempo = false;
}

// zera o relogio
function parar() {
  clearInterval(tempo);
  contando_tempo = false;

  mostra_popup();
  mostra_hist();

  // zera a contagem
  seg = 0;
  min = 0;
  hor = 0;
  document.getElementById("tela").innerHTML = "00:00:00";
}

// pop-up
let popup_ligado = true;

// ativa o pop-up
function liga_popup() {
  if (popup_ligado === true) {
    popup_ligado = false;
    document.getElementById("pop_up").innerHTML = "ativar pop-up";
  } else {
    popup_ligado = true;
    document.getElementById("pop_up").innerHTML = "desativar pop-up";
  }
}

function mostra_popup() {
  if (popup_ligado === true) {
    alert(`${tela(hor)}:${tela(min)}:${tela(seg)}`);
  }
}

// historico
var hist_ligado = true;

// ativa o hist
function liga_hist() {
  if (hist_ligado === true) {
    hist_ligado = false;
    document.getElementById("hist").innerHTML = "ativar hitórico";
  } else {
    hist_ligado = true;
    document.getElementById("hist").innerHTML = "desativar hitórico";
  }
}

function mostra_hist() {
  if (hist_ligado === true) {
    const $ul = document.getElementById("ul");
    $ul.insertAdjacentHTML("beforeend", `<li>${tela(hor)}:${tela(min)}:${tela(seg)}</li>`);
  }
}

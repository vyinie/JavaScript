let seg = 0;
let min = 0;
let hor = 0;
let contando_tempo = false;

// inicia a função que roda tudo
function iniciar() {
  if (contando_tempo === false) {
    contar();
    tempo = setInterval(contar, 100);
    contando_tempo = true;
  } else {
    !iniciar;
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
        if ((hor == 23) & (min == 59) & (sec == 59)) {
          alert("man, u got so far, goddamn");
        }
      }
    }
  }
  document.getElementById("tela").innerHTML =
    tela(hor) + ":" + tela(min) + ":" + tela(seg);
}

// faz os numeros com 1 digito terem um "0" antes
function tela(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}

// pausa
function pausar() {
  clearInterval(tempo);
  contando_tempo = false;
}

// zera o relogio
function parar() {
  clearInterval(tempo);
  contando_tempo = false;

  // historico temporal oOoOoOoOOoOoOokk
  if (hist_ligado === true) {
    let li = document.createElement("li");
    let dados = tela(hor) + ":" + tela(min) + ":" + tela(seg);
    let lista = document.getElementById("ul");
    li.textContent = dados;
    lista.appendChild(li);
  }
  // permissão do pop-up
  if (popup_ligado === true) {
    alert(tela(hor) + ":" + tela(min) + ":" + tela(seg));
  }

  // zera a contagem
  seg = 0;
  min = 0;
  hor = 0;
  document.getElementById("tela").innerHTML = "00:00:00";

  // carrega o historico
  window.addEventListener("load", registro);
}

// desativa o pop-up
let popup_ligado = true;

function liga_popup() {
  if (popup_ligado === true) {
    popup_ligado = false;
    document.getElementById('pop_up').innerHTML = "ativar pop-up"
  } else {
    popup_ligado = true;
    document.getElementById('pop_up').innerHTML = "desativar pop-up"
  }
}

// desativa o historico
let hist_ligado = true;

function liga_hist() {
  if (hist_ligado === true) {
    hist_ligado = false;
    document.getElementById('hist').innerHTML = "ativar hitórico"
  } else {
    hist_ligado = true;
    document.getElementById('hist').innerHTML = "desativar hitórico"
  }
}

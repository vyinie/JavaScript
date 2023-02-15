let seg = 0;
let min = 0;
let hor = 0;
let ligado = false;

// inicia a função que roda tudo
function iniciar() {
  if (ligado === false) {
    contar();
    tempo = setInterval(contar, 1000);
    ligado = true;
  }else{!iniciar}
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
  ligado = false;
}

// zera o relogio
function parar() {
  clearInterval(tempo);
  alert(tela(hor) + ":" + tela(min) + ":" + tela(seg));
  seg = 0;
  min = 0;
  hor = 0;
  document.getElementById("tela").innerHTML = "00:00:00";
  ligado = false;
}

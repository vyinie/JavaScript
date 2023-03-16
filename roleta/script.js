// preventDefalt
const form = document.querySelector("form");
form.addEventListener("submit", () => {
  event.preventDefault();
});

// ==========================variaveis==========================
const $inpTxt = document.querySelector("#inpTxt");
const $inpBtn = document.querySelector("#inpBtn");
const $ul = document.querySelector("#ul");
const $btnGirar = document.querySelector("#btnGirar");
const $inpDel = document.querySelector("#inpDel");
// ======================outras variaveis=======================
const opcoes = [];
var id = 0;

// ====================add opcoes a rolerta=====================
$inpBtn.addEventListener("click", () => {
  if ($inpTxt.value != "") {
    $ul.insertAdjacentHTML(
      "beforeend",
      `<li onclick="delLi()"
       id="${id}">${$inpTxt.value}</li>`
    );
    opcoes.push($inpTxt.value);
    $inpTxt.focus();
    $inpTxt.value = "";
    id++;
  } else {
    $inpTxt.focus();
  }
});

// =====================limpa a lista toda======================
$inpDel.addEventListener("click", () => {
  opcoes.splice(0, opcoes.length);
  id = 0;
  $ul.innerHTML = "";
});

// =================deleta uma opcao especifica=================
function mudaLugar(daqui, praca) {
  var item = opcoes[daqui];
  opcoes.splice(daqui, 1);
  opcoes.splice(praca, 0, item);
}

function delLi() {
  var target = event.target.id;
  $ul.removeChild(document.getElementById(target));

  const index = opcoes.indexOf(event.target.textContent)
  mudaLugar(index, 0);
  opcoes.shift()
}

// ======================gira essa bagaça=======================
$btnGirar.addEventListener("click", () => {
  const random = Math.floor(Math.random() * opcoes.length);
  console.log(opcoes[random]);
});

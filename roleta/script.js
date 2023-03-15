// preventDefalt
const form = document.querySelector("form");
form.addEventListener("click" | "enter", () => {
  event.preventDefault();
});

// variaveis
const $inpTxt = document.querySelector("#inpTxt");
const $inpBtn = document.querySelector("#inpBtn");
const $ul = document.querySelector("#ul");
const $btnGirar = document.querySelector("#btnGirar");
const $inpDel = document.querySelector("#inpDel");
// ===============================================
const opcoes = [];
// ===============================================

// add opcoes a rolerta
$inpBtn.addEventListener("click", () => {
  if ($inpTxt.value != "") {
    $ul.insertAdjacentHTML(
      "beforeend",
      `<li onclick="delLi()"
       id="${opcoes.length}">${$inpTxt.value}</li>`
    );
    opcoes.push({
      id: opcoes.length,
      text: $inpTxt.value,
    });
    $inpTxt.focus();
    $inpTxt.value = "";
  } else {
    $inpTxt.focus();
  }
});

// limpa a lista toda
$inpDel.addEventListener("click", () => {
  opcoes.splice(0, opcoes.length);
  $ul.innerHTML = "";
});

function delLi() {
  var target = event.target.id;
  var removeId = document.getElementById(`id${target}`);
  $ul.removeChild(document.getElementById(target));
  if(opcoes.some((e) => target)){
}}

// gira essa bagaça
$btnGirar.addEventListener("click", () => {
  const random = Math.floor(Math.random() * opcoes.length);
  console.log(opcoes[random]);
});

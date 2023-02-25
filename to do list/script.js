// evita o reset pelo submit
const $submit = document.querySelector("form");
$submit.addEventListener("submit", (event) => {
  event.preventDefault();
});

// id do form
var $inpTxt = document.querySelector("#inpText");
const $inpBtn = document.querySelector("#inpBtn");

// id das li
var $divUl = document.querySelector("#div");
const $delBtn = document.querySelector("#delBtn");

// add uma li
var lista = "<ul>";
var itens = [];
var id = 0;

$inpBtn.addEventListener("click", () => {
  var idLiBtn = id;
  var liContent =
    "<li class=" +
    id +
    "><input class=inpC type='checkbox'>" +
    $inpTxt.value +
    "<button id=" +
    idLiBtn +
    " class=liBtn>X" +
    "</li>";

  itens.push(liContent);
  lista += itens[id];
  id++;
  $divUl.innerHTML = lista;

  $inpTxt.value = "";
  $inpTxt.focus();
});

// limpa toda a lista
$delBtn.addEventListener("click", () => {
  itens.splice(0, itens.length);
  id = 0;
  lista = "<ul>";
  $divUl.innerHTML = lista;
  console.log(lista);
});

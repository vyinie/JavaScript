// evita o reset pelo submit
const $submit = document.querySelector("form");
$submit.addEventListener("submit", (event) => {
  event.preventDefault();
});

// ======================variaveis do html======================
// id do form
const $inpTxt = document.querySelector("#inpText");
const $inpBtn = document.querySelector("#inpBtn");

// id das li
var $ul = document.querySelector("#ul");
const $delBtn = document.querySelector("#delBtn");

// ========================mexe nas li's========================
var id = 0;
var idList = [];

// insere uma li
$inpBtn.addEventListener("click", () => {
  if ($inpTxt.value != "") {
    var li = document.createElement("li");

    const liCont = `<input id="inpC${id}" type=checkbox>
  <label for="inpC${id}">${$inpTxt.value}</label>
  <button onclick=deletar() class=liBtn id=${id}
      >X`;

    li.innerHTML = liCont;
    $ul.appendChild(li);

    li.classList.add(`id${id}`);
    idList.push(id);
    id++;

    $inpTxt.value = "";
    $inpTxt.focus();
  }
});

// limpa toda a lista
$delBtn.addEventListener("click", () => {
  idList.splice(0, idList.length);
  id = 0;
  $ul.innerHTML = "";
});

// del item especifico
function deletar() {
  var target = event.target.id;
  var liTargeted = document.querySelector(`.id${target}`);
  if (idList.some((e) => target)) {
    $ul.removeChild(liTargeted);
  }
}

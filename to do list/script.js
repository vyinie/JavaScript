// evita o reset pelo submit
const $submit = document.querySelector("form");
$submit.addEventListener("submit", (event) => {
  event.preventDefault();
});

// id do form
var $inpTxt = document.querySelector("#inpText");
const $inpBtn = document.querySelector("#inpBtn");

// id das li
var $ul = document.querySelector("#div");
const $delBtn = document.querySelector("#delBtn");

// add uma li
var id = 0;
var idList = [];

// insere uma li
$inpBtn.addEventListener("click", () => {
  var li = document.createElement("li");

  const liCont = `<input type=checkbox>
      ${$inpTxt.value}
      <button onclick=deletar() class=liBtn id=${id}
      >X`;

  li.innerHTML = liCont;
  $ul.appendChild(li);

  li.classList.add(`d${id}`);
  idList.push(id);
  id++;

  $inpTxt.value = "";
  $inpTxt.focus();
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
  var liTargeted = document.querySelector(`.d${target}`);
  if (idList.some((e) => target)) {
    $ul.removeChild(liTargeted);
  }
}

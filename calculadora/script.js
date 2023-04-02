const $calc = document.querySelector("#calc");
const $display = document.querySelector("#display");
const $btn = document.querySelector(".btn");
const $mais = document.querySelector("#mais");
const $menos = document.querySelector("#menos");
const $divid = document.querySelector("#divid");
const $vezes = document.querySelector("#vezes");

$calc.addEventListener("click", (e) => {
  if (e.target.className === "btn operacao") {
    $display.textContent += " " + e.target.textContent + " ";
  } else {
    if (e.target.className === "btn") {
      $display.textContent += e.target.textContent;
    }
  }
});

const $calc = document.querySelector("#calc");
const $display = document.querySelector("#display");
var ultimaKey = $display.textContent.slice(-1);
const sinais = ["-", "+", "*", "/"];

$calc.addEventListener("click", (e) => {
  const verifSinal = sinais.some((e) => e == ultimaKey);
  if (e.target.id === "igual") {
    $display.textContent = eval($display.textContent);
  } else {
    if (e.target.id === "del") {
      $display.textContent = $display.textContent.slice(0, -1);
    } else {
      if (e.target.id === "delC") {
        $display.textContent = "";
      } else {
        if (
          (e.target.className === "btn operacao") &
          (($display.textContent != "") | (e.target.textContent == "-"))
        ) {
          if (!verifSinal) {
            $display.textContent += e.target.textContent;
          } else {
            $display.textContent =
              $display.textContent.slice(0, -1) + e.target.textContent;
          }
        } else {
          if (e.target.className === "btn") {
            $display.textContent += e.target.textContent;
          }
        }
      }
    }
  }
  console.log($display.textContent.indexOf("."));
  ultimaKey = $display.textContent.slice(-1);
});

// =======================variaveis HTML=======================
const $folha = document.querySelector("#folha");
const $bloco = document.querySelector(".bloco");
const $safe = document.querySelector("#safe");

const $pontoX = document.querySelector("#pontoX");
const $pontoCir = document.querySelector("#pontoCir");

// =====================mostra os desenhos=====================
var minhaVez = 1;
var espacosCheios = 0;

// ===================mostra o x e o circulo===================
function desenha(e) {
  if (minhaVez === 0) {
    const id = e.target.id.slice(-1);
    document.getElementById(id).classList = "contCir";
    minhaVez++;
    espacosCheios++;
  } else {
    const id = e.target.id.slice(-1);
    document.getElementById(id).classList = "contX";
    minhaVez--;
    espacosCheios++;
  }
}

// =========================reseta tudo========================
function reset() {
  setTimeout(() => {
    for (var i = 1; i <= 9; i++) {
      document.getElementById(i).classList = "";
    }
    minhaVez = 1;
    espacosCheios = 0;
  }, 500);
}
// ============algritimo de posibilidades de vitoria===========
const linhas = [
  [
    document.getElementById("1"),
    document.getElementById("2"),
    document.getElementById("3"),
  ],
  [
    document.getElementById("4"),
    document.getElementById("5"),
    document.getElementById("6"),
  ],
  [
    document.getElementById("7"),
    document.getElementById("8"),
    document.getElementById("9"),
  ],
];
const colunas = [
  [
    document.getElementById("1"),
    document.getElementById("4"),
    document.getElementById("7"),
  ],
  [
    document.getElementById("2"),
    document.getElementById("5"),
    document.getElementById("8"),
  ],
  [
    document.getElementById("3"),
    document.getElementById("6"),
    document.getElementById("9"),
  ],
];
const diagonais = [
  [
    document.getElementById("1"),
    document.getElementById("5"),
    document.getElementById("9"),
  ],
  [
    document.getElementById("3"),
    document.getElementById("5"),
    document.getElementById("7"),
  ],
];
var ponstosX = 0;
var ponstosCir = 0;

function map(qntReps, arr, classe) {
  // passa por todas as possibilidades verificando as posiçoes do X
  for (var i = 0; i <= qntReps; i++) {
    const mapX = arr[i].map((e) => e.classList == classe);
    const filterX = mapX.filter((e) => e === true);

    if (filterX.length === 3) {
      $safe.style.display = "flex";
      ponstosX++;
      $pontoX.textContent = ponstosX;
      reset();
      
      setTimeout(() => {
        $safe.style.display = "none";
      }, 500);
    }
  }
}
// =====================interaçoes na folha====================
$folha.addEventListener("click", function (e) {
  if (e.target.className === "bloco") {
    desenha(e);
    if (espacosCheios === 9) {
      reset();
    }
    map(2, linhas, "contX");
    map(2, colunas, "contX");
    map(1, diagonais, "contX");
    map(2, linhas, "contCir");
    map(2, colunas, "contCir");
    map(1, diagonais, "contCir");
  }
});

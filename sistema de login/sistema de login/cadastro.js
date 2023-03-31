// evita o submit do form
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// =======================sessão de login=======================

// ======================variaveis do html======================
const $entrar = document.querySelector("#entrar");
const $SenhaLogin = document.querySelector("#senhaLogin");
const $olhoLogin = document.querySelector(".olhoLogin");

// =================faz a altenticação da senha=================
$entrar.addEventListener("click", () => {
  const user = document.querySelector("#usuarioLogin");
  const senha = document.querySelector("#senhaLogin");
  const pegaSenha = JSON.parse(localStorage.getItem(user.value));

  if ((user.value == "") | (senha.value == "")) {
    alert("preencha os campos");
  } else {
    if (localStorage.getItem(user.value) == null) {
      alert("esse usuario não existe, faça um cadastro");
      mostraPopup();
    } else {
      if (senha.value === pegaSenha.senha) {
        alert("entrou");
      } else {
        alert("senha ou usuario incorretos");
      }
    }
  }
  user.value = "";
  senha.value = "";
  user.focus();
});

// =============novamente, só leia o nome da função=============

$olhoLogin.addEventListener("click", () => {
  if ($SenhaLogin.getAttribute("type") == "password") {
    $SenhaLogin.setAttribute("type", "text");
    $olhoLogin.innerHTML = "--";
  } else {
    $SenhaLogin.setAttribute("type", "password");
    $olhoLogin.innerHTML = "O";
  }
});

// ======================sessão de cadastro=====================

// ======================variaveis do html======================
const $cadastBtn = document.querySelector("#cadastBtn");
const $cadastUser = document.getElementById("inpUsuario");
const $cadastidade = document.getElementById("inpIdade");
const $cadastEmail = document.getElementById("inpEmail");
const $cadastSenha = document.getElementById("senhaCadast");

const $btnCadastrar = document.querySelector(".btnCadastar");
const $telaCadastro = document.querySelector("#fundoCadastro");
const $olhoCadast = document.querySelector(".olhoCadast");

// ==================leia ler o nome da função==================
function mostraPopup() {
  var display = $telaCadastro.style.display;
  if (display == "") {
    $telaCadastro.style.display = "flex";
  } else {
    $telaCadastro.style.display = "";
  }
}

// ===============salva os dados no localStorage================

function criaEmails() {
  if (localStorage.getItem("emails") === null) {
    var emails = [];
    localStorage.setItem("emails", JSON.stringify(emails));
  }
}
function criaNomes() {
  if (localStorage.getItem("nomes") === null) {
    var nomes = [];
    localStorage.setItem("nomes", JSON.stringify(nomes));
  }
}

// =====================add a conta ao banco====================

$cadastBtn.addEventListener("click", () => {
  criaEmails();
  criaNomes();

  var conta = {};
  const arrNomes = JSON.parse(localStorage.getItem("nomes"));
  const verificaNome = arrNomes.some((e) => e === $cadastUser.value);

  const arrEmails = JSON.parse(localStorage.getItem("emails"));
  const verificaEmail = arrEmails.some((e) => e === $cadastEmail.value);

  const arrVars = [
    $cadastEmail.value,
    $cadastSenha.value,
    $cadastUser.value,
    $cadastidade.value,
  ];
  const verificaVars = arrVars.some((e) => e === "");

  if (verificaVars) {
    alert("preencha todos os campos");
  } else {
    // verifica se o email ja existe
    if (!verificaNome & !verificaEmail) {
      conta = {
        nome: $cadastUser.value,
        idade: $cadastidade.value,
        email: $cadastEmail.value,
        senha: $cadastSenha.value,
      };

      arrEmails.push($cadastEmail.value);
      localStorage.setItem("emails", JSON.stringify(arrEmails));

      arrNomes.push($cadastUser.value);
      localStorage.setItem("nomes", JSON.stringify(arrNomes));

      const strConta = JSON.stringify(conta);
      localStorage.setItem(conta.nome, strConta);

      $telaCadastro.style.display = "";

      $cadastUser.value = "";
      $cadastidade.value = "";
      $cadastEmail.value = "";
      $cadastSenha.value = "";
    } else {
      alert("nome ou email em uso");
    }
  }
});

// =============novamente, só leia o nome da função=============

$olhoCadast.addEventListener("click", () => {
  if ($cadastSenha.getAttribute("type") == "password") {
    $cadastSenha.setAttribute("type", "text");
    $olhoCadast.innerHTML = "--";
  } else {
    $cadastSenha.setAttribute("type", "password");
    $olhoCadast.innerHTML = "O";
  }
});

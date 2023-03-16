// evita o submit do form
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// =======================sessão de login=======================

// ======================variaveis do html======================
const $entrar = document.querySelector("#entrar");
const $btnCadastrar = document.querySelector(".btnCadastar");
const $telaCadastro = document.querySelector("#fundoCadastro");

// ================n sabe ler o nome da função?=================
function mostraPopup() {
  var display = $telaCadastro.style.display;
  if (display == "") {
    $telaCadastro.style.display = "flex";
  } else {
    $telaCadastro.style.display = "";
  }
}

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
const mostrarSenha = document.querySelector(".olho");
const $SenhaLogin = document.querySelector("#senhaLogin");

mostrarSenha.addEventListener("click", () => {
  if ($SenhaLogin.getAttribute("type") == "password") {
    $SenhaLogin.setAttribute("type", "text");
    mostrarSenha.innerHTML = "--";
  } else {
    $SenhaLogin.setAttribute("type", "password");
    mostrarSenha.innerHTML = "O";
  }
});

// ======================sessão de cadastro=====================

// ======================variaveis do html======================
const $cadastBtn = document.querySelector("#cadastBtn");
const $cadastUser = document.getElementById("inpUsuario");
const $cadastidade = document.getElementById("inpIdade");
const $cadastEmail = document.getElementById("inpEmail");
const $cadastSenha = document.getElementById("inpSenha");

// ===============salva os dados no localStorage================
function coletaDeDados() {
  var conta = {
    nome: $cadastUser.value,
    idade: $cadastidade.value,
    email: $cadastEmail.value,
    senha: $cadastSenha.value,
  };

  // cria o array só com emails
  if (localStorage.getItem("emails") == null) {
    var emails = [];
    emails.push($cadastEmail.value);
    localStorage.setItem("emails", JSON.stringify(emails));
  } else {
    var verificacaoEmail = JSON.parse(localStorage.getItem("emails"));
    verificacaoEmail.push($cadastEmail.value);
    localStorage.setItem("emails", JSON.stringify(verificacaoEmail));
  }

  // add a conta completa
  const strConta = JSON.stringify(conta);
  localStorage.setItem(conta.nome, strConta);
}

// =====================add a conta ao banco====================
$cadastBtn.addEventListener("click", () => {
  const verificacaoConta = JSON.parse(localStorage.getItem($cadastUser.value));
  const verificacaoEmail = JSON.parse(localStorage.getItem("emails"));

  if (verificacaoConta == null) {
    coletaDeDados();

    $telaCadastro.style.display = "";

    $cadastUser.value = "";
    $cadastidade.value = "";
    $cadastEmail.value = "";
    $cadastSenha.value = "";
  } else {
    // verifica se o nome de usuario ja existe

    if ($cadastUser.value == verificacaoConta.nome) {
      alert("uma conta ja possue esse nome de usuario, tente outro");
      $cadastUser.value = "";
    } else {
      // verifica se o email ja existe

      const emailsLista = JSON.parse(localStorage.getItem("emails"));
      $cadastEmail;
      const testeEmail = emailsLista.some((e) => e === cadastEmail.value);

      if (testeEmail) {
        alert("esse email ja existe");
        cadastEmail.value = "";
      }
    }
  }
});

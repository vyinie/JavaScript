// evita o submit do form
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// variaveis do html
const $entrar = document.querySelector("#entrar");
const $btnCadastrar = document.querySelector(".btnCadastar");
const $telaCadastro = document.querySelector("#fundoCadastro");

// mostra o popup, n sabe ler o nome da função?
function mostraPopup() {
  var display = $telaCadastro.style.display;
  if (display == "") {
    $telaCadastro.style.display = "flex";
  } else {
    $telaCadastro.style.display = "";
  }
}

// faz a altenticação da senha
$entrar.addEventListener("click", () => {
  const user = document.querySelector("#usuarioLogin");
  const senha = document.querySelector("#senhaLogin");
  const pegaSenha = JSON.parse(localStorage.getItem(user.value));

  if (user.value | (senha.value == "")) {
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

// novamente, só leia o nome da função
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

const $cadastBtn = document.querySelector("#cadastBtn");

$cadastBtn.addEventListener("click", () => {
  const cadastUser = document.getElementById("inpUsuario");
  const cadastidade = document.getElementById("inpIdade");
  const cadastEmail = document.getElementById("inpEmail");
  const cadastSenha = document.getElementById("inpSenha");
  var conta = {
    nome: cadastUser.value,
    idade: cadastidade.value,
    email: cadastEmail.value,
    senha: cadastSenha.value,
  };
  const strConta = JSON.stringify(conta);

  const verificacao = JSON.parse(localStorage.getItem(cadastUser.value));

  console.log(verificacao)

  if (verificacao === null) {
    localStorage.setItem(conta.nome, strConta);

    $telaCadastro.style.display = "";
    cadastUser.value = "";
    cadastidade.value = "";
    cadastEmail.value = "";
    cadastSenha.value = "";
  } else {
    if (cadastEmail.value == verificacao.email) {
      alert("uma conta ja possue esse email, tente outro");
      cadastEmail.value = ""
    } else {
      if (cadastUser.value == verificacao.nome) {
        alert("uma conta ja possue esse nome de usuario, tente outro");
        cadastUser.value = ""
      }
    }
  }
});

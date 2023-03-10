const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const entrar = document.querySelector("#entrar");
const btnCadastrar = document.querySelector("#btnCadastar");

btnCadastrar.addEventListener("click", () => {
  const confirm = window.confirm("deseja fazer o cadastro?");
  if (confirm) {
    const pessoa = {
      usuario: prompt("digite um nome de usuario"),
      senha: prompt("digite uma senha"),
    };

    localStorage.setItem(pessoa.usuario, JSON.stringify(pessoa.senha));
  }
});

entrar.addEventListener("click", () => {
  const user = document.querySelector("#usuario").value;
  const senha = document.querySelector("#senha");

  if (senha.value === JSON.parse(localStorage.getItem(user))) {
    alert("entrou");
  } else {
    if (localStorage.getItem(user) == null) {
      alert("esse usuario não existe, faça um cadastro");
    } else {
      alert("senha ou usuario incorretos");
    }
  }
});

const mostrarSenha = document.querySelector(".olho");
mostrarSenha.addEventListener("click", function () {
  if (senha.getAttribute("type") == "password") {
    senha.setAttribute("type", "text");
    mostrarSenha.innerHTML = "--";
  } else {
    senha.setAttribute("type", "password");
    mostrarSenha.innerHTML = "O";
  }
});

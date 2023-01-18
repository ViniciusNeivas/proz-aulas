// ---------- FUNÇÕES GERAIS -------------- //
function togglePopup(input, label) {
  // Mostrar popup de campo obrigatório
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });

  // Ocultar popup de campo obrigatório
  input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
  });
}

function estilizarInputCorreto(input, helper) {
  helper.classList.remove("visible");
  input.classList.remove("error");
  input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper) {
  helper.classList.add("visible");
  input.classList.add("error");
  input.classList.remove("correct");
}

// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

togglePopup(usernameInput, usernameLabel);

// Validar valor do input
usernameInput.addEventListener("change", (e) => {
  let valor = e.target.value;

  if (valor.length < 3) {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    usernameHelper.innerText = "Seu username precisa ter 3 ou mais caracteres";
    estilizarInputIncorreto(usernameInput, usernameHelper);
  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(usernameInput, usernameHelper);
  }
});

// ---------- VALIDAÇÃO EMAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

togglePopup(emailInput, emailLabel);

// Validar valor do input
emailInput.addEventListener("change", (e) => {
  let valor = e.target.value;

  if (valor.includes("@") && valor.includes(".com")) {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(emailInput, emailHelper);
  } else {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    emailHelper.innerText = "Precisa inserir um email válido";
    estilizarInputIncorreto(emailInput, emailHelper);
  }
});

// Validação de senha:
// 1. Capturar elementos da senha (input, label e mensagem de ajuda)
// 2. Aplicar um eventListener nele que é ativado cada vez que o input perde o foco (independentemente de se o valor mudou)
// 3. Usar uma estrutura condicional para verificar se o valor está vazio
// 4. Aplicar as estilizações dinâmicas usando as "funções gerais" vistas no começo da aula

let senha = document.getElementById("senha");
let mensagemAjuda = document.getElementById("senha-helper");
let senhaLabel = document.querySelector("label[for='senha']");

togglePopup(senha, senhaLabel);

senha.addEventListener("blur", (e) => {
  let valorSenha = e.target.value;
  if (!valorSenha) {
    mensagemAjuda.innerText = "Opa! Você precisa inserir uma senha válida!";
    estilizarInputIncorreto(senha, mensagemAjuda);
  } else {
    estilizarInputCorreto(senha, mensagemAjuda);
  }
});

// Aplicar uma validação ao campo de "confirmar a senha" seguido o exemplo das validações anteriores, mas verificando se o valor dele é igual ao valor da senha

let confirmaSenha = document.getElementById("confirma-senha");
let mensagemAjudaConfirmarSenha = document.getElementById("confirma-senha-helper");
let confirmarSenhaLabel = document.querySelector("label[for='confirma-senha']");

togglePopup(confirmaSenha, confirmarSenhaLabel);

confirmaSenha.addEventListener("blur", (e) => {
  let valorConfirmaSenha = e.target.value;
  if (valorConfirmaSenha === senha.value && valorConfirmaSenha != 0) {
    mensagemAjudaConfirmarSenha.innerText = "Senhas conferem";
    console.log("certo");
    estilizarInputCorreto(confirmaSenha, mensagemAjudaConfirmarSenha);
  } else {
    console.log("erro");
    estilizarInputIncorreto(confirmaSenha, mensagemAjudaConfirmarSenha);
    mensagemAjudaConfirmarSenha.innerText = "Senhas precisam ser iguais";
  }
});

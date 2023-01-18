// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

// Mostrar popup de campo obrigatório
usernameInput.addEventListener("focus", () => {
    usernameLabel.classList.add("require-pop");
});

// Ocultar popup de campo obrigatório
usernameInput.addEventListener("blur", () => {
    usernameLabel.classList.add("require-pop");
});

// Validar valor do input
usernameInput.addEventListener("change", (e) => {
    let valor = e.target.value.trim();
    if (valor.length < 3) {
        usernameInput.classList.add("error");
        usernameInput.classList.remove("correct");
        usernameHelper.classList.add("visible");
        usernameHelper.innerText = "Seu username precisa ter 3 ou mais caracteres.";
        
    } else {
        usernameInput.classList.add("correct");
        usernameInput.classList.remove("error");
        usernameHelper.classList.remove("visible");
    }
});

let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");


emailInput.addEventListener("change", (e) => {
    let valor = e.target.value;
    if (valor.includes("@") && valor.includes(".com")) {
        
        emailInput.classList.add("correct");
        emailInput.classList.remove("error");
        emailHelper.classList.remove("visible");
        console.log("valido");
    } else {

        emailInput.classList.add("error");
        emailInput.classList.remove("correct");
        emailHelper.classList.add("visible");
        emailHelper.innerText = "Digite um e-mail válido! ";
        console.log("INVALIDO");
    }
});

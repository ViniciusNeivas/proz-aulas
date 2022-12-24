let titulo = document.querySelector('h2');
titulo.style.color = "blue";
titulo.style.fontSize= "2rem";

let username = document.getElementById("login-usuario")
let erroText = document.querySelectorAll(".error-text");
username.classList.add("error")
erroText[0].classList.add("visible")



let erroTextPassword = document.getElementById("login-senha");
username.classList.remove("error")
erroText[0].classList.remove("visible")

username.classList.add("correct");
erroTextPassword.classList.add("error");

erroText[1].classList.add("visible")




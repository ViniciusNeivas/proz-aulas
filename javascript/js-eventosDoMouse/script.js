let button = document.querySelector("button");
let span = document.querySelector("span");
let section = document.querySelector("section");


button.addEventListener("mouseover", function mostrarSpan(){
    span.style.opacity ="100";
});

button.addEventListener("mouseout", function ocultarSpan() {
    span.style.opacity = "0";
});

button.addEventListener("click", function fazerUmClick(){
    section.innerHTML = "Fez um click simples!"
});
 
button.addEventListener("dblr click", function fazerDoisClick(){
    section.innerHTML = "Fez um duplo click!"
});
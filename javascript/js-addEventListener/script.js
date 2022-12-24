// Quem? Elementos HTML
let numero = document.querySelector("h1");
let botao = document.querySelector("button");
let contagem = 0;

// O que?

// Função Convencional

// function adicionarUm(){
//     contagem = contagem + 1;
//     numero.innerHTML = contagem;
// }

// botao.addEventListener("click", adicionarUm);

// Função Anônima

// botao.addEventListener("click", function(){
//     contagem = contagem + 1;
//     numero.innerHTML = contagem;
// });

// Arrow Function

botao.addEventListener("click", () =>{  
    contagem = contagem + 1;
    numero.innerHTML = contagem;
});

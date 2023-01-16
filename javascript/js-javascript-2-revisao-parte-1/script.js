// Propriedade Style

let titulo = document.querySelector("h1");
titulo.style.color = "#D4210D"
titulo.style.fontSize = "2.4rem"

// Propriedade classList

let section = document.querySelector("section");

section.classList.contains("container-produtos")
section.classList.add("container-produtos")
section.classList.remove("container-produtos")
section.classList.toggle("container-produtos")
section.classList.toggle("visible")


// Quem ? 

let botao1 = document.querySelector("button");
let texto = document.querySelector("p");


// O que ?

function changeColor () {
    titulo.style.color = "blue";
}

// Quando ? / addEventListener("tipo do evento", function () {})

let botao = document.querySelect("button");
botao.addEventListener("click", function changeColor() {
    titulo.style.color = "blue";
})


// Informações do evento

botaoTempo.addEventListener("click", (evento) => {
    console.log(evento.timeStamp)
  })
//   A propriedade timeStamp retorna um número que representa a quantidade de milissegundos desde a renderização da página até o momento em que o evento aconteceu.

botaoCor.addEventListener("click", (evento) => {
    console.log(evento.target)
  })

//   A propriedade target nos permite acessar as informações e propriedades tanto do elemento que ativou o evento quanto dos seus elementos filhos. 


// EVENTO DE TECLADO

// 
document.addEventListener("keyup", (e)=> {
    console.log(e.key); // valor 1 
    console.log(e.code); // id da tecla
  })


  // PREVENTDEFAULT()

  link.addEventListener("click", (evento) => {

    evento.preventDefault()
  
  })


  // ALERT ()

  alert("Não foi possível enviar os dados do formulário")

// - post 02
// - formulario
// - section com ambos os posts
// - datas dos posts
// - textos dos posts
// - listas com links das redes sociais


console.log("Hello Multiverso");

const post01 = document.getElementById("post01")
console.log(post01);

const postAutores = document.getElementsByClassName("post-autor")
console.log(postAutores);

const post02 = document.getElementById("post02")
console.log(post02);

const formulario = document.getElementById("formulario")
console.log(formulario);

const posts = document.getElementById("posts")
console.log(posts);

const dataPost = document.getElementsByTagName("dataPost")
console.log(dataPost);

const postTexto = document.getElementsByTagName("post-texto")
console.log(postTexto);

const listaRedes = document.getElementsByTagName("lista_redes")
console.log(listaRedes);

let textPost02 = document.querySelector("#post02 .post-texto")
console.log(textPost02);

let redesFooter = document.querySelectorAll("footer .lista_redes a")
console.log(redesFooter);

// - O link dentro do texto do primeiro post
// - A palavra em negrito dentro do texto do segundo post
// - O input de nome do formulário
// - Os links da lista de redes no final da página
// - Os links da navegação (só os links, não os elementos de lista)
// - Os 4 "Autor:" e "Data:" em negrito nos dois posts

let linkPost01 = document.querySelector(".post-texto a")
console.log(linkPost01);

let strongPost02 = document.querySelector(".post-texto strong")
console.log(strongPost02);

let inputNome = document.querySelector("#nome")
console.log(inputNome);

let linksRedes =  document.querySelectorAll("ul .lista_redes li a")
console.log(linksRedes);


let elementoJavaScript= document.createElement('li')
elementoJavaScript.innerText = 'JavaScript'
elementoJavaScript.id = "ling-js"

let listaLinguagens = document.querySelector(".lista-linguagens").appendChild(elementoJavaScript)
console.log(elementoJavaScript);

const postagemJavaScript = document.createElement('div')

postagemJavaScript.innerHTML = 
`<h2 class="post-titulo">JavaScript</h2>
<p class="post-texto">
  JavaScript é uma linguagem de programação.
</p>`

const postagens = document.querySelector('.postagens').appendChild(postagemJavaScript)


let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

function atualizarSubtotal() {
  quantidadeSubtotal.innerText = `${subtotalInfo.quantidade} itens`;
  valorSubtotal.innerText = subtotalInfo.valor.toFixed(2).replace(".", ",");
}
atualizarSubtotal();
// Capturar do DOM
let btnAdicionarProduto01 = document.getElementById("btn-adicionar-produto-01");
let quantidadeProduto1 = document.getElementById("quantidade-produto-01");
let  valorProduto01 = 11.66
// Declarar a função

// Definição

btnAdicionarProduto01.addEventListener("click", function adicionarUm() {
  quantidadeProduto1.value = Number(quantidadeProduto1.value) + 1;
  subtotalInfo.quantidade += 1;
  subtotalInfo.valor += valorProduto01;
  atualizarSubtotal();
});

btnAdicionarProduto01.addEventListener("click", function subtrairUm() {
  quantidadeProduto1.value = Number(quantidadeProduto1.value) - 1;
  subtotalInfo.quantidade -= 1;
  subtotalInfo.valor -= valorProduto01;
  atualizarSubtotal();
});


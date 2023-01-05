const prompt = require("prompt-sync")();

console.log("Leia o valor de um produto e imprima o valor com desconto de 12%");

const produto = Number(prompt("Digite o valor do produto: "));
const desconto = 0.88;

const produtoComDesconto = produto * desconto;
console.log(produtoComDesconto);

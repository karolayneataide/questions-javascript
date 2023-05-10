const prompt = require("prompt-sync")();

let vetor = [];
let maior = -Infinity;
let posicao = 0;

for (let i = 0; i < 10; i++) {
  const elemento = parseInt(prompt("Digite um valor inteiro: "));

  if (elemento > maior) {
    maior = elemento;
    posicao = i;
  }
  vetor.push(elemento);
}
console.log(
  `Do array: ${vetor}, o maior número é: ${maior} e sua posição é: ${posicao}`
);

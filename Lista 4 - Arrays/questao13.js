const prompt = require("prompt-sync")();

let vetor = [];
let maior = -Infinity;
let menor = Infinity;
let posicao_maior = 0;
let posicao_menor = 0;

for (let i = 0; i < 5; i++) {
  const elemento = parseInt(prompt("Digite um valor inteiro: "));

  if (elemento > maior) {
    maior = elemento;
    posicao_maior = i;
  }
  if (elemento < menor) {
    menor = elemento;
    posicao_menor = i;
  }

  vetor.push(elemento);
}
console.log(
  `O maior número se encontra na posição : ${posicao_maior} e o menor na posição: ${posicao_menor}`
);

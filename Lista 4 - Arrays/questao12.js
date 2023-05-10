const prompt = require("prompt-sync")();

let vetor = [];
let maior = -Infinity;
let menor = Infinity;
let media = 0;
let soma = 0;
let amostra = 0;

for (let i = 0; i < 5; i++) {
  const elemento = parseInt(prompt("Digite um valor inteiro: "));

  if (elemento > maior) {
    maior = elemento;
  }
  if (elemento < menor) {
    menor = elemento;
  }

  vetor.push(elemento);

  soma += elemento;
  amostra = vetor.length;

  media = soma / amostra;
}
console.log(
  `Média do array: ${media}, o maior número é: ${maior} e o menor é: ${menor}`
);

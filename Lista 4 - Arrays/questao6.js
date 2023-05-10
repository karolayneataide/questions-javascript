const prompt = require("prompt-sync")();

let vetor = [];
let maior = -Infinity;
let menor = Infinity;

for (let i = 0; i < 10; i++) {
  const elemento = parseInt(prompt("Digite um valor inteiro: "));

  if (elemento > maior) {
    maior = elemento;
  }
  if (elemento < menor) {
    menor = elemento;
  }
  vetor.push(elemento);
}
console.log(
  `Do array: ${vetor}, o maior número é: ${maior} e o menor é: ${menor}`
);

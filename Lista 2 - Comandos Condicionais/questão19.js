const prompt = require("prompt-sync")();

console.log(
  "Faça um programa para verificar se um determinado numero inteiro e divisível por 3 ou 5, mas nao simultaneamente pelos dois."
);

const numero = parseInt(prompt("Digite um número: "));

if (numero % 3 == 0 && numero % 7 == 0) {
  console.log("Número inválido!");
} else {
  if (numero % 3 == 0) {
    console.log("Número múltiplo de 3");
  }
  if (numero % 7 == 0) {
    console.log("Número múltiplo de 7");
  }
}

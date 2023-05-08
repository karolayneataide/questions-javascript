const prompt = require("prompt-sync")();

console.log(
  "Imprima os número naturais de 0 ao Número Digitado, em ordem crescente."
);

const numeroDigitado = parseInt(
  prompt("Digite um número inteiro e positivo: ")
);

if (numeroDigitado > 0) {
  for (let i = numeroDigitado; i >= 0; i--) {
    console.log(i);
  }
}

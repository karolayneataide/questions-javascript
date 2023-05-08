const prompt = require("prompt-sync")();

console.log(
  "Imprima os número naturais de 0 ao Número Digitado, em ordem decrescente."
);

const numeroDigitado = parseInt(
  prompt("Digite um número inteiro e positivo: ")
);

if (numeroDigitado % 2 == 0) {
  for (let i = numeroDigitado; i >= 0; i--) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

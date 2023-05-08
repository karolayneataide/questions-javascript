const prompt = require("prompt-sync")();

console.log(
  "Imprima os número naturais de 0 ao Número Digitado, em ordem crescente."
);

let numero = 0;

const numeroDigitado = parseInt(
  prompt("Digite um número inteiro e positivo: ")
);

if (numeroDigitado > 0) {
  for (let i = 0; i <= numeroDigitado; i++) {
    console.log(numero);
    numero++;
  }
}

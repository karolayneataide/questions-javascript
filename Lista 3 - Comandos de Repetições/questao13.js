const prompt = require("prompt-sync")();

console.log(
  "Imprima os número naturais de 0 ao Número Digitado, em ordem crescente."
);

let numero = 0;

const numeroDigitado = parseInt(
  prompt("Digite um número inteiro e positivo: ")
);

if (numeroDigitado % 2 == 0) {
  for (let i = 0; i <= numeroDigitado; i++) {
    numero++;
    if (numero % 2 == 0) {
      console.log(numero);
    }
  }
}

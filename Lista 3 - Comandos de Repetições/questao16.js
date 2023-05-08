const prompt = require("prompt-sync")();

const numeroDigitado = parseInt(
  prompt("Digite um número inteiro e positivo: ")
);

if (numeroDigitado % 2 !== 0) {
  for (let i = numeroDigitado; i >= 0; i--) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

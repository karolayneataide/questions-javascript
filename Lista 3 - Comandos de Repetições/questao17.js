const prompt = require("prompt-sync")();

let soma = 0;

const numeroDigitado = parseInt(
  prompt("Digite um número inteiro e positivo: ")
);

if (numeroDigitado > 0) {
  for (let i = numeroDigitado; i >= 0; i--) {
    soma += i;
  }
  console.log(`A soma dos números entre ${numeroDigitado} e 0 é: ${soma}`);
}

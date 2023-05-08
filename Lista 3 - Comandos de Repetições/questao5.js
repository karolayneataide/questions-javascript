const prompt = require("prompt-sync")();

console.log("Digite dez números inteiros para obter a soma deles.");

const numerosDigitados = [];
let soma = 0;
for (let i = 0; i < 10; i++) {
  const numeroDigitado = parseInt(prompt("Digite um número inteiro : "));

  numerosDigitados.push(numeroDigitado);
  soma += numeroDigitado;
  console.log(`a soma é : ${soma}`);
}

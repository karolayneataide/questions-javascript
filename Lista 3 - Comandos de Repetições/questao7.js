const prompt = require("prompt-sync")();

console.log(
  "Digite dez números inteiros e positivos para obter a média deles."
);

const numerosDigitados = [];
let soma = 0;
let media = 0;
for (let i = 0; i <= 10; i++) {
  const numeroDigitado = parseInt(
    prompt("Digite um número inteiro e positivo: ")
  );

  if (numeroDigitado > 0) {
    numerosDigitados.push(numeroDigitado);
    soma += numeroDigitado;
    media += soma / numerosDigitados.length;
    console.log(`a média é : ${media}`);
  } else {
    console.log("Número inválido!");
  }
}

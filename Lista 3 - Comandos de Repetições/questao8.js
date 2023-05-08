const prompt = require("prompt-sync")();

console.log("Digite dez números inteiros para obter o maior e o menor número.");

let maior = -Infinity;
let menor = Infinity;

for (let i = 0; i <= 10; i++) {
  const numeroDigitado = parseInt(
    prompt("Digite um número inteiro e positivo: ")
  );

  if (numeroDigitado > maior) {
    maior = numeroDigitado;
  }
  if (numeroDigitado < menor) {
    menor = numeroDigitado;
  }
}

console.log(`Número maior: ${maior}`);
console.log(`Número maior: ${menor}`);

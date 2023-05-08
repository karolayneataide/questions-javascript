const prompt = require("prompt-sync")();

console.log("Digite a soma dos 50 primeiro números pares .");

let soma = 0;

for (let i = 0; i <= 50; ) {
  const numeroDigitado = Number.parseInt(prompt("Digite um número natural: "));

  if (numeroDigitado % 2 === 0) {
    soma += numeroDigitado;
    i++;
  }
}

console.log(`Resultado: ${soma}`);

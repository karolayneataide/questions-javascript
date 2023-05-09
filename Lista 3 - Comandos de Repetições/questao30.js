const prompt = require("prompt-sync")();

let sequencia1 = 0;
let sequencia2 = 0;
let sinal = 1;

const numeroDigitado = Number.parseInt(
  prompt("Digite um número natural (n): ")
);

for (let n = 1; n <= numeroDigitado; n++) {
  sequencia1 += n;
}

for (let i = 1; i <= 2 * numeroDigitado - 1; i++) {
  const termo = 2 * i - 1;
  sequencia2 += sinal * termo;
  sinal *= -1;
}

console.log(`A sequência de 1+n, é: ${sequencia1}`);
console.log(`A sequência de (2n-1), é: ${sequencia2}`);

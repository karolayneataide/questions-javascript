const prompt = require("prompt-sync")();

let soma = 0;

const numero = parseInt(prompt("Digite um número positivo: "));

if (numero > 0) {
  for (let i = 0; i <= numero; i++) {
    if (numero % i == 0) {
      soma += i;
    }
  }
}
console.log(`Soma dos divisores: ${soma}`);

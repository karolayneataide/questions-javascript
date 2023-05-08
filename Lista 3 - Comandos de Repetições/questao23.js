const prompt = require("prompt-sync")();

let divisores = [];

const numero = parseInt(prompt("Digite um número positivo: "));

if (numero > 0) {
  for (let i = 0; i <= numero; i++) {
    if (numero % i == 0) {
      divisores.push(i);
    }
  }
}
console.log(`Divisores: ${divisores}`);

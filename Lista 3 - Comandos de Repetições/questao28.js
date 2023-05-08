const prompt = require("prompt-sync")();

let valorE = 1;
const numero = parseInt(prompt("Digite um número inteiro e positivo: "));

for (let i = 1; i <= numero; i++) {
  let fatorial = 1;
  for (let j = 1; j <= i; j++) {
    fatorial *= j;
  }
  valorE += 1 / fatorial;
}

console.log(`O valor de E é: ${valorE}`);

const prompt = require("prompt-sync")();

let encontrado = false;
let resultado;

const numero = parseInt(prompt("Digite um número inteiro e positivo: "));

for (let i = numero + 1; !encontrado; i++) {
  if (numero > 0) {
    if (i % 11 == 0 || i % 13 == 0 || i % 17 == 0) {
      encontrado = true;
      resultado = i;
    }
  }
}

console.log(`O primeiro múltiplo de 11, 13 ou 17 é : ${resultado}`);

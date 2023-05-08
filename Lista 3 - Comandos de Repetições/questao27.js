const prompt = require("prompt-sync")();

let valorH = 1;

const numero = parseInt(
  prompt("Digite o valor de n que seja inteiro e positivo: ")
);

for (let i = 0; i <= numero; i++) {
  if (numero > 0) {
    valorH = 1 / i;
  }
}
console.log(`O valor de H(n) é : ${valorH}`);

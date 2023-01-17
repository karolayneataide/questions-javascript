const prompt = require("prompt-sync")();

console.log(
  "Leia um numero real. Se o numero for positivo imprima a raiz quadrada. Do contrário, imprima o número ao quadrado. "
);

const numero = Number(prompt("Digite um número real: "));

if (numero > 0) {
  return console.log(Math.sqrt(numero));
} else {
  return console.log(numero * numero);
}

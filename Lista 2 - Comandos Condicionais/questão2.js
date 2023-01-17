const prompt = require("prompt-sync")();

console.log(
  "Leia um numero fornecido pelo usuário. Se esse número for positivo, calcule a raiz quadrada do numero. Se o número for negativo, mostre uma mensagem dizendo que o número é inválido. "
);

const numero = Number(prompt("Digite um número: "));

if (numero > 0) {
  return console.log(Math.sqrt(numero));
} else {
  return console.log("O número é inválido");
}

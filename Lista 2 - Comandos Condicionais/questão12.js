const prompt = require("prompt-sync")();

console.log(
  "Ler um numero inteiro. Se o número lido for negativo, escreva a mensagem “Número invalido”. Se o número for positivo, calcular o logaritmo deste numero."
);

const numero = parseInt(prompt("Digite um número: "));

if (numero > 0) {
  const logaritmo = Math.log10(numero);
  return console.log(logaritmo);
} else {
  return console.log("Número inválido");
}

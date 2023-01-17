const prompt = require("prompt-sync")();

console.log(
  "Faça um programa que receba um numero inteiro e verifique se este número é par ou ímpar. "
);

const numero = Number(prompt("Digite um número: "));

if (numero % 2 == 0) {
  return console.log("Par", numero);
} else {
  return console.log("Impar", numero);
}

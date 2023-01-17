const prompt = require("prompt-sync")();

console.log(
  "Faça um programa que receba dois numeros e mostre o maior. Se por acaso, os dois números forem iguais, imprima a mensagem Números iguais. "
);

const numero1 = Number(prompt("Digite um número: "));
const numero2 = Number(prompt("Digite mais um número: "));

if (numero1 > numero2) {
  return console.log("O maior é: ", numero1);
}
if (numero2 > numero1) {
  return console.log("O maior é: ", numero2);
}
if (numero1 == numero2) {
  return console.log("Números iguais");
}

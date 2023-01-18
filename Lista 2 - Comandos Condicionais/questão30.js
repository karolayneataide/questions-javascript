const prompt = require("prompt-sync")();

console.log(
  "Faça um programa que receba tres números e mostre-os em ordem crescente"
);

const numero1 = parseInt(prompt("Digite um número: "));
const numero2 = parseInt(prompt("Digite um número: "));
const numero3 = parseInt(prompt("Digite um número: "));

if (numero1 < numero2 && numero2 < numero3) {
  return console.log(numero1, ", ", numero2, ", ", numero3);
}
if (numero3 < numero2 && numero2 < numero1) {
  return console.log(numero3, ", ", numero2, ", ", numero1);
}
if (numero2 < numero1 && numero1 < numero3) {
  return console.log(numero2, numero1, numero3);
}
if (numero2 < numero3 && numero3 < numero1) {
  return console.log(numero2, ", ", numero3, ", ", numero1);
}
if (numero3 < numero1 && numero1 < numero2) {
  return console.log(numero3, ", ", numero1, ", ", numero2);
}
if (numero1 < numero3 && numero3 < numero2) {
  return console.log(numero1, numero3, numero2);
}

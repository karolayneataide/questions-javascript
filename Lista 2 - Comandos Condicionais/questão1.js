const prompt = require("prompt-sync")();

console.log(
  "Faça um programa que receba dois numeros e mostre qual deles é o maior. "
);

const numero1 = Number(prompt("Digite um número: "));
const numero2 = Number(prompt("Digite mais um número: "));

if (numero1 > numero2) {
  return console.log("O maior é: ", numero1);
} else {
  return console.log("O maior é: ", numero2);
}

const prompt = require("prompt-sync")();

const peso = Number(prompt("Digite o peso: "));
const altura = Number(prompt("Digite a altura: "));

const IMC = peso / altura;

if (IMC <= 18.5) {
  return console.log("Abaixo do peso");
}
if (IMC >= 18.6 && IMC <= 24.9) {
  return console.log("Saudável");
}
if (IMC >= 25 && IMC <= 29.9) {
  return console.log("Peso em excesso");
}
if (IMC >= 30 && IMC <= 34.9) {
  return console.log("Obesidade Grau I");
}
if (IMC >= 35 && IMC <= 39.9) {
  return console.log("Obesidade Grau II (severa)");
}
if (IMC >= 40) {
  return console.log("Obesidade Grau III (mórbida)");
}

const prompt = require("prompt-sync")();

console.log(
  "Faça um programa que receba a altura e o sexo de uma pessoa e calcule e mostre seu peso ideal, utilizando as seguintes formulas (onde h corresponde a altura): • Homens: (72.7 ∗ h) − 58,  • Mulheres: (62, 1 ∗ h) − 44, 7."
);

const altura = Number(prompt("Digite sua altura: "));
const sexo = String(prompt("Digite M para masculino, e N para feminino: "));

if (sexo == "F") {
  const pesoFeminino = 62.1 * altura - 44.7;
  return console.log("Peso Ideal: ", pesoFeminino);
}
if (sexo == "M") {
  const pesoMasculino = 72 * altura - 58;
  return console.log("Peso Ideal: ", pesoMasculino);
} else {
  return console.log("Dado inválido");
}

const prompt = require("prompt-sync")();

console.log("Faça um  programa que leia a área de um trapézio: ");

const baseMaior = Number(prompt("Digite a base maior: "));
const baseMenor = Number(prompt("Digite a base menor: "));
const altura = Number(prompt("Digite a altura: "));

if (baseMaior > baseMenor) {
  const area = ((baseMaior + baseMenor) * altura) / 2;
  return console.log("A área do Trapézio é: ", area);
} else {
  console.log("A base maior deverá ser maior que a base menor!");
}

const prompt = require("prompt-sync")();

console.log(
  "Dados três valores, A, B, C, verificar se eles podem ser valores dos lados de um triangulo e qual o tipo do triângulo: "
);

const valorA = Number(prompt("Digite o valor de A: "));
const valorB = Number(prompt("Digite o valor de B: "));
const valorC = Number(prompt("Digite o valor de C: "));

const somaAB = valorA + valorB;
const somaCB = valorC + valorB;
const somaAC = valorA + valorC;

if (
  valorA < somaAB &&
  valorA < somaAC &&
  valorA < somaCB &&
  valorB < somaAB &&
  valorB < somaAC &&
  valorB < somaCB &&
  valorC < somaAB &&
  valorC < somaAC &&
  valorC < somaCB
) {
  if (valorA == valorB && valorA == valorC) {
    return console.log("Triângulo equilátero");
  }
  if (valorA == valorB || valorA == valorC || valorB == valorC) {
    return console.log("Triângulo isósceles");
  }
  if (valorA != valorB && valorC != valorA && valorC != valorB) {
    return console.log("Triângulo escaleno");
  }
} else {
  return console.log("Não é um triângulo");
}

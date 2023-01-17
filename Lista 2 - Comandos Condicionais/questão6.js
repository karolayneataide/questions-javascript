const prompt = require("prompt-sync")();

console.log(
  "Escreva um programa que, dados dois numeros inteiros, mostre na tela o maior deles, assim como a diferença existente entre ambos. "
);

const numero1 = parseInt(prompt("Digite um número: "));
const numero2 = parseInt(prompt("Digite mais um número: "));

const diferenca = numero1 - numero2;

if (numero1 > numero2) {
  return (
    console.log("O maior é: ", numero1),
    console.log("A diferença entre eles: ", diferenca)
  );
} else {
  return (
    console.log("O maior é: ", numero2),
    console.log("A diferença entre eles: ", diferenca)
  );
}

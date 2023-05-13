const prompt = require("prompt-sync")();

console.log("Digite dois números para descobrir o maior.");
const numero1 = Number(prompt("Digite um número inteiro: "));
const numero2 = Number(prompt("Digite um número inteiro: "));

let maior;

function descobrindoMaior(numero1, numero2) {
  if (numero1 > numero2) {
    maior = numero1;
  } else {
    maior = numero2;
  }

  return maior;
}

const resultado = descobrindoMaior(numero1, numero2);

console.log(resultado);

const prompt = require("prompt-sync")();

console.log(
  "Usando switch, escreva um programa que leia um inteiro entre 1 e 12 e imprima o mês correspondente a este numero. Isto e, janeiro se 1, fevereiro se 2, e assim por diante."
);

const numero = parseInt(prompt("Digite um numero de 1 a 12: "));

switch (numero) {
  case 1:
    console.log("Janeiro");
    break;
  case 2:
    console.log("Fevereiro");
    break;
  case 3:
    console.log("Março");
    break;
  case 4:
    console.log("Abril");
    break;
  case 5:
    console.log("Maio");
    break;
  case 6:
    console.log("Junho");
    break;
  case 7:
    console.log("Julho");
    break;
  case 8:
    console.log("Agosto");
    break;
  case 9:
    console.log("Setembro");
    break;
  case 10:
    console.log("Outubro");
    break;
  case 11:
    console.log("Novembro");
    break;
  case 12:
    console.log("Dezembro");
    break;
  default:
    console.log("Número inválido");
    break;
}

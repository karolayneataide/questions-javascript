const prompt = require("prompt-sync")();

console.log(
  "Usando switch, escreva um programa que leia um inteiro entre 1 e 7 e imprima o dia da semana correspondente a este numero. Isto e, domingo se 1, segunda-feira se 2, e assim por diante."
);

const numero = parseInt(prompt("Digite um numero de 1 a 7: "));

switch (numero) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Número inválido");
    break;
}

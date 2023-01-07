const prompt = require("prompt-sync")();

console.log(
  "Tres amigos jogaram na loteria. Caso eles ganhem, o prêmio deve ser repartido proporcionalmente ao valor que cada deu para a realização da aposta. Faça um programa que leia quanto cada apostador investiu, o valor do premio, e imprima quanto cada um ganharia do premio com base no valor investido."
);

const premio = parseInt(prompt("Digite o valor do prêmio: "));
const amigo1 = parseInt(prompt("Digite a aposta do primeiro amigo: "));
const amigo2 = parseInt(prompt("Digite a aposta do segundo amigo: "));
const amigo3 = parseInt(prompt("Digite a aposta do terceiro amigo: "));

const apostaTotal = amigo1 + amigo2 + amigo3;
const premioAmigo1 = (amigo1 / apostaTotal) * premio;
const premioAmigo2 = (amigo2 / apostaTotal) * premio;
const premioAmigo3 = (amigo3 / apostaTotal) * premio;

console.log("Prêmio do primeiro amigo em reais: ", premioAmigo1);
console.log("Prêmio do segundo amigo em reais: ", premioAmigo2);
console.log("Prêmio do terceiro amigo em reais: ", premioAmigo3);

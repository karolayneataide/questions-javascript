const prompt = require("prompt-sync")();

console.log(
  "Escreva um programa que leia as coordenadas x e y de pontos no R2 e calcule sua distancia da origem (0, 0)."
);

const x = Number(prompt("Digite o valor de X: "));
const y = Number(prompt("Digite o valor de Y: "));

const x2 = x * x;
const y2 = y * y;
const distanciaOrigem = Math.sqrt(x2 + y2);

console.log(distanciaOrigem);

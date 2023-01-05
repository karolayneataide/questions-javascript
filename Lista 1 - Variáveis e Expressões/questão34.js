const prompt = require("prompt-sync")();

const raio = Number(
  prompt("Digite o raio de um círculo, para obter sua área: ")
);
const pi = 3.141596;

const area = pi * raio * raio;
console.log(area);

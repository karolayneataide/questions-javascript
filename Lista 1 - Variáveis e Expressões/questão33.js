const prompt = require("prompt-sync")();

const lado = Number(
  prompt("Digite o lado de um quadrado, para obter sua área: ")
);

const area = lado * lado;
console.log(area);

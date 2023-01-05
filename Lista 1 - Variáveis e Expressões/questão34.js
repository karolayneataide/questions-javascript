const prompt = require("prompt-sync")();

const raio = Number(
  prompt("Digite o raio de um círculo, para obter sua área: ")
);

const area = 3.141596 * raio * raio;
console.log(area);

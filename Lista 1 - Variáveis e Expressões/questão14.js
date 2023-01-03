const prompt = require("prompt-sync")();

const graus = Number(
  prompt("Digite um ângulo em graus, para obtê-lo em radianos: ")
);
const radianos = (graus * 3.14) / 180;
console.log(radianos);

const prompt = require("prompt-sync")();

const radianos = Number(
  prompt("Digite um ângulo em radianos, para obtê-lo em graus: ")
);
const graus = (radianos * 180) / 3.14;
console.log(graus);

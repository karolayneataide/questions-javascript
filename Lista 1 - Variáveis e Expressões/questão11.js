const prompt = require("prompt-sync")();

const mS = Number(
  prompt("Digite uma velocidade em km/h, para obtê-la em m/s: ")
);

const kmH = mS * 3.6;

console.log(kmH);

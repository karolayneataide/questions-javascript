const prompt = require("prompt-sync")();

const kmH = Number(
  prompt("Digite uma velocidade em km/h, para obtê-la em m/s: ")
);
const mS = kmH / 3.6;
console.log(mS);

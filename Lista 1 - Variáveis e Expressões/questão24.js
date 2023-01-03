const prompt = require("prompt-sync")();

const m2 = Number(
  prompt("Digite uma área em metros quadrados, para obtê-la em acres: ")
);
const acre = m2 * 0.000247;
console.log(acre);

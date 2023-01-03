const prompt = require("prompt-sync")();

const m2 = Number(
  prompt("Digite uma área em metros quadrados, para obtê-la em hectares: ")
);
const ha = m2 * 0.0001;
console.log(ha);

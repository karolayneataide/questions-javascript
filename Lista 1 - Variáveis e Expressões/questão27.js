const prompt = require("prompt-sync")();

const ha = Number(
  prompt("Digite uma área em hectares, para obtê-la em metros quadrados: ")
);

const m2 = ha * 10000;

console.log(m2);

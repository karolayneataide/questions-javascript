const prompt = require("prompt-sync")();

const acre = Number(
  prompt("Digite uma área em acres, para obtê-la em metros quadrados: ")
);
const m2 = acre * 4048.58;
console.log(m2);

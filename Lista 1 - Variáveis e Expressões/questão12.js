const prompt = require("prompt-sync")();

const mi = Number(
  prompt("Digite uma distância em milhas, para obtê-la em quilômetros: ")
);

const km = mi * 1.61;

console.log(km);

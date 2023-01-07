const prompt = require("prompt-sync")();

const km = Number(
  prompt("Digite uma distância em quilômetros, para obtê-la em milhas: ")
);

const mi = km / 1.61;

console.log(mi);

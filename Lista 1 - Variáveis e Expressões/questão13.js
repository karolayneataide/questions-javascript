const prompt = require("prompt-sync")();

const km = Number(
  prompt(
    "Digite uma distância em quilômetros, para obter ela convertida em milhas: "
  )
);
const mi = km / 1.61;
console.log(mi);

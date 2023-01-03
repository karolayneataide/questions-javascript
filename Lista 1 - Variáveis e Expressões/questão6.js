const prompt = require("prompt-sync")();

const grausCelsius = Number(
  prompt(
    "Digite uma temperatura em Graus Celsius, para obter ela convertida em Fahrenheit: "
  )
);
const fahrenheit = grausCelsius * (9 / 5) + 32;
console.log(fahrenheit);

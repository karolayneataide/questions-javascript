const prompt = require("prompt-sync")();

const fahrenheit = Number(
  prompt(
    "Digite uma temperatura em Fahrenheit, para obtê-la em Graus Celsius: "
  )
);
const grausCelsius = (5 * (fahrenheit - 32)) / 9;
console.log(grausCelsius);

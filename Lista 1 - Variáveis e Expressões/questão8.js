const prompt = require("prompt-sync")();

const kelvin = Number(
  prompt("Digite uma temperatura em Kelvin, para obtê-la em Graus Celsius: ")
);

const grausCelsius = kelvin - 273.15;

console.log(grausCelsius);

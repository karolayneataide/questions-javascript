const prompt = require("prompt-sync")();

const grausCelsius = Number(
  prompt("Digite uma temperatura em Graus Celsius, para obtê-la em Kelvin: ")
);
const kelvin = grausCelsius + 273.15;
console.log(kelvin);

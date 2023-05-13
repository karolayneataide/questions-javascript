const prompt = require("prompt-sync")();

const celsius = Number(
  prompt("Digite o valor da temperatura em Celsius para obter em Fahrenheit: ")
);

let fahrenheit;

function temperaturaFahrenheit(celsius) {
  fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

const resultado = temperaturaFahrenheit(celsius);

console.log(resultado);

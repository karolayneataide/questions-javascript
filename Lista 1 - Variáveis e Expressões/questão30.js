const prompt = require("prompt-sync")();

const real = Number(
  prompt("Digite um valor em real, para convertê-lo em dólar: ")
);
const dolar = real * 0.18;
console.log(dolar);

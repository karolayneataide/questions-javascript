const prompt = require("prompt-sync")();

const pol = Number(
  prompt("Digite um comprimento em polegadas, para obtê-lo em centímetros: ")
);
const cm = pol * 2.54;
console.log(cm);

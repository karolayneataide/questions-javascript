const prompt = require("prompt-sync")();

const cm = Number(
  prompt("Digite um comprimento em centímetros, para obtê-lo em polegadas: ")
);
const pol = cm / 2.54;
console.log(pol);

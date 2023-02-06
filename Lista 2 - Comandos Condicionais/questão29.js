const prompt = require("prompt-sync")();

function numeroRandomico() {
  return Math.floor(Math.random() * (100 - 1 + 1) + 1);
}

const numero1 = numeroRandomico();
const numero2 = numeroRandomico();
const soma1e2 = numero1 + numero2;

console.log("Quanto é a soma de ", numero1, "e", numero2);

const soma = Number(prompt("Digite aqui o resultado: "));

if (soma == soma1e2) {
  return console.log("Correto!");
} else {
  return console.log("Errado. O resultado é: ", soma1e2);
}

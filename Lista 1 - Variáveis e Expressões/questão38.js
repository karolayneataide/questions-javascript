const prompt = require("prompt-sync")();

console.log(
  "Leia o salário de um funcionário e imprima com uma aumento de 25%"
);

const salario = Number(prompt("Digite o salário de um funcionário: "));
const aumento = 1.25;

const salarioComAumento = salario * aumento;
console.log(salarioComAumento);

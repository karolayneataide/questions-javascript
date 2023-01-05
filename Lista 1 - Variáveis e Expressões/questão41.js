const prompt = require("prompt-sync")();

console.log(
  "Faça um programa que leia o valor da hora de trabalho (em reais) e numero de horas trabalhadas no mes. Imprima o valor a ser pago ao funcionário, adicionando 10% sobre o valor calculado.  "
);

const horaDeTrabalho = Number(
  prompt("Digite o valor da hora de trabalho em reais: ")
);
const horasTrabalhadas = Number(
  prompt("Digita a quantidade de horas trabalhadas no mês: ")
);
const adicional = 1.1;

const pagamentoLiquido = horaDeTrabalho * horasTrabalhadas * adicional;

console.log("R$ ", pagamentoLiquido);

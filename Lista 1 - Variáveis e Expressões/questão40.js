const prompt = require("prompt-sync")();

console.log(
  " Uma empresa contrata um encanador a R$ 30,00 por dia. Faça um programa que solicite o numero de dias trabalhados pelo encanador e imprima a quantia líquida que deverá ser paga, sabendo-se que sao descontados 8% para imposto de renda. "
);

const diaria = 30;
const imposto = 0.92;
const diasTrabalhados = parseInt(prompt("Dias trabalhados: "));

const pagamentoLiquido = diaria * imposto * diasTrabalhados;

console.log("R$ ", pagamentoLiquido);

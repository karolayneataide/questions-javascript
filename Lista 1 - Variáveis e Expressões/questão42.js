const prompt = require("prompt-sync")();

console.log(
  "Receba o salario-base de um funcionario. Calcule e imprima o salario a receber, sabendo-se que esse funcionario tem uma gratificação de 5% sobre o salário-base. Além disso, ele paga 7% de imposto sobre o salario-base.  "
);

const gratificacao = 1.05;
const imposto = 0.93;
const salarioBase = Number(prompt("Digite o valor do salário base: R$ "));

const diferencaSalarioComImposto = salarioBase * imposto - salarioBase;
const diferencaSalarioComGratificacao =
  salarioBase * gratificacao - salarioBase;

const salarioAReceber =
  salarioBase + diferencaSalarioComGratificacao + diferencaSalarioComImposto;

console.log(salarioAReceber);

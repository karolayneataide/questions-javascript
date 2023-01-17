const prompt = require("prompt-sync")();

console.log(
  "Leia o salario de um trabalhador e o valor da prestação de um empréstimo. Se a prestação for maior que 20% do salário imprima: Empréstimo não concedido, caso contrário imprima: Empréstimo concedido."
);

const salario = Number(prompt("Digite o salário do colaborador: "));
const prestacao = Number(prompt("Digite o valor da prestação: "));

const vintePorcentoSalario = salario * 0.2;

if (prestacao <= vintePorcentoSalario) {
  {
    return console.log("Empréstimo concedido");
  }
} else {
  return console.log("Empréstimo não concedido");
}

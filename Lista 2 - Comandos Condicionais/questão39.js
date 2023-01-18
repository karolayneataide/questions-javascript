const prompt = require("prompt-sync")();

const salario = Number(prompt("Digite o valor do salário: "));
const tempoDeServico = Number(prompt("Digite o tempo de serviço: "));

if (salario <= 500) {
  const reajuste = salario * 1.25;
  return console.log("Salário: ", reajuste);
}
if (salario <= 1000) {
  if (tempoDeServico >= 1 && tempoDeServico <= 3) {
    const reajuste = salario * 1.2 + 100;
    return console.log("Salário: ", reajuste);
  } else {
    const reajuste = salario * 1.2;
    return console.log("Salário: ", reajuste);
  }
}
if (salario <= 1500) {
  if (tempoDeServico >= 4 && tempoDeServico <= 6) {
    const reajuste = salario * 1.15 + 200;
    return console.log("Salário: ", reajuste);
  } else {
    const reajuste = salario * 1.15;
    return console.log("Salário: ", reajuste);
  }
}
if (salario <= 2000) {
  if (tempoDeServico >= 7 && tempoDeServico <= 10) {
    const reajuste = salario * 1.1 + 300;
    return console.log("Salário: ", reajuste);
  } else {
    const reajuste = salario * 1.1;
    return console.log("Salário: ", reajuste);
  }
}
if (salario > 2000) {
  if (tempoDeServico > 10) {
    const reajuste = salario + 500;
    return console.log("Salário: ", reajuste);
  } else {
    return console.log("Salário: ", salario);
  }
}

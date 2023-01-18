const prompt = require("prompt-sync")();

const custoFabrica = Number(prompt("Digite o custo de fábrica: "));

if (custoFabrica < 12000) {
  const custoDistribuidor = custoFabrica * 0.05;
  const custoConsumidor = custoFabrica + custoDistribuidor;
  return console.log("Custo final: ", custoConsumidor);
}
if (custoFabrica >= 12000 && custoFabrica <= 25000) {
  const custoDistribuidor = custoFabrica * 0.1;
  const imposto = custoFabrica * 0.15;
  const custoConsumidor = custoFabrica + custoDistribuidor + imposto;
  return console.log("Custo final: ", custoConsumidor);
}
if (custoFabrica > 25000) {
  const custoDistribuidor = custoFabrica * 0.15;
  const imposto = custoFabrica * 0.2;
  const custoConsumidor = custoFabrica + custoDistribuidor + imposto;
  return console.log("Custo final: ", custoConsumidor);
}

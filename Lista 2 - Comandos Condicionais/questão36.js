const prompt = require("prompt-sync")();

const venda = Number(prompt("Digite o valor da venda: "));

if (venda >= 100000) {
  const comissao = 700 + venda * 1.16;
  return console.log("Comissão: ", comissao);
}
if (venda < 100000 && venda >= 80000) {
  const comissao = 650 + venda * 1.14;
  return console.log("Comissão: ", comissao);
}
if (venda < 80000 && venda >= 60000) {
  const comissao = 600 + venda * 1.14;
  return console.log("Comissão: ", comissao);
}
if (venda < 60000 && venda >= 40000) {
  const comissao = 550 + venda * 1.14;
  return console.log("Comissão: ", comissao);
}
if (venda < 40000 && venda >= 20000) {
  const comissao = 500 + venda * 1.14;
  return console.log("Comissão: ", comissao);
}
if (venda < 20000) {
  const comissao = 400 + venda * 1.14;
  return console.log("Comissão: ", comissao);
}

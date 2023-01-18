const prompt = require("prompt-sync")();

const produto = Number(prompt("Digite o valor do produto: "));

if (produto < 50) {
  const produtoAtualizado = produto * 1.05;
  return console.log("Novo valor: ", produtoAtualizado);
}
if (produto >= 50 && produto <= 100) {
  const produtoAtualizado = produto * 1.1;
  return console.log("Novo valor: ", produtoAtualizado);
}
if (produto >= 100) {
  const produtoAtualizado = produto * 1.15;
  return console.log("Novo valor: ", produtoAtualizado);
}

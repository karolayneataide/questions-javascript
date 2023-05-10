const prompt = require("prompt-sync")();

let positivo = 0;
let negativo = 0;

for (let i = 0; i < 10; i++) {
  const elemento = parseFloat(prompt("Digite um valor real: "));

  if (elemento > 0) {
    positivo += elemento;
  }
  if (elemento < 0) {
    negativo++;
  }
}
console.log(
  `Quantidade de números negativos: ${negativo}, soma dos números positivos: ${positivo}`
);

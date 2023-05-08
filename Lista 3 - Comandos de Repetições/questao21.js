const prompt = require("prompt-sync")();

const numero1 = Number.parseInt(prompt("Digite um número inteiro: "));
const numero2 = Number.parseInt(prompt("Digite um número inteiro: "));

let par = 0;
let multiplicacao = 1;

if (numero1 > numero2) {
  const diferencaNumero = numero1 - numero2;
  for (let i = numero2; i <= diferencaNumero + numero2; i++) {
    if (i % 2 == 0) {
      par += i;
    }
  }
  console.log(`Soma dos pares: ${par}`);
} else {
  const diferencaNumero = numero2 - numero1;
  for (let i = numero1; i <= diferencaNumero + numero1; i++) {
    if (i % 2 !== 0) {
      multiplicacao *= i;
    }
  }
  console.log(` Produto dos Ímpares: ${multiplicacao}`);
}

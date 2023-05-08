const prompt = require("prompt-sync")();

let maior = -Infinity;
let quantidade = 0;

const vezes = parseInt(
  prompt("Digite a quantidade de números a serem lidos: ")
);

if (vezes === 0) {
  console.log("Nenhum número foi lido");
}

for (let i = 0; i < vezes; i++) {
  const numero = parseInt(prompt("Digite uum número natural e inteiro: "));
  if (numero > maior) {
    maior = numero;
    quantidade = 1;
  } else if (numero == maior) {
    quantidade++;
  }
}

console.log(
  `O maior número digitado é: ${maior}, ele foi digitado ${quantidade} vezes.`
);

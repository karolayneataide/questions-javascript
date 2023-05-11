const prompt = require("prompt-sync")();

const vetor = [];
let multiplo = 0;

const valorX = parseInt(prompt("Digite o valor de X: "));

for (let i = 0; i < 10; i++) {
  let elemento = parseInt(prompt("Digite um valor inteiro: "));
  multiplo = elemento / valorX;
  vetor.push(multiplo);
}

console.log(vetor);

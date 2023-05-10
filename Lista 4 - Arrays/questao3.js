const prompt = require("prompt-sync")();

let vetor = [];
let quadrado = 0;

for (let i = 0; i < 10; i++) {
  const elemento = parseInt(prompt("Digite um número: "));
  quadrado = elemento * elemento;
  vetor.push(quadrado);
}
console.log(`Array digitado: ${vetor}`);

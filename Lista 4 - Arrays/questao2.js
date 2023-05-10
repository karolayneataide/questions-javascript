const prompt = require("prompt-sync")();

let vetor = [];

for (let i = 0; i < 6; i++) {
  const elemento = parseInt(prompt("Digite um número: "));

  vetor.push(elemento);
}
console.log(`Array digitado: ${vetor}`);

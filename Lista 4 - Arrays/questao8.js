const prompt = require("prompt-sync")();

let vetor = [];
let inverso = [];

for (let i = 0; i < 6; i++) {
  const elemento = parseInt(prompt("Digite um valor inteiro: "));
  vetor.push(elemento);
}

for (let i = 5; i >= 0; i--) {
  inverso.push(vetor[i]);
}
console.log(`Array inverso: ${inverso}`);

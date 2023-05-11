const prompt = require("prompt-sync")();

const vetor = [];

for (let i = 0; i < 10; i++) {
  let elemento = parseInt(prompt("Digite um valor: "));
  if (elemento < 0) {
    elemento = 0;
    vetor.push(elemento);
  } else {
    vetor.push(elemento);
  }
}
console.log(vetor);

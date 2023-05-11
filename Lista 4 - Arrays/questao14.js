const prompt = require("prompt-sync")();

let vetor = [];

for (let i = 0; i < 10; i++) {
  const elemento = parseInt(prompt("Digite um valor: "));
  vetor.push(elemento);
}

for (let i = 0; i < vetor.length; i++) {
  for (let j = i + 1; j < vetor.length; j++) {
    if (vetor[i] === vetor[j]) {
      console.log(`Elemento repetido: ${vetor[i]}`);
    }
  }
}

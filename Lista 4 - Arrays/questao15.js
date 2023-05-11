const prompt = require("prompt-sync")();

const vetor = [],
  vetorFiltrado = [];

for (let i = 0; i < 5; i++) {
  const elemento = parseInt(prompt("Digite um valor: "));
  vetor.push(elemento);
}

for (let i = 0; i < vetor.length; i++) {
  let isDuplicated = false;

  for (let j = i + 1; j < vetor.length; j++) {
    if (vetor[i] === vetor[j]) {
      isDuplicated = true;
      break;
    }
  }

  if (!isDuplicated) {
    vetorFiltrado.push(vetor[i]);
  }
}

console.log(vetorFiltrado);

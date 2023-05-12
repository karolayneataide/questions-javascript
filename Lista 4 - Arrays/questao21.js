const prompt = require("prompt-sync")();

const vetorB = [];
const vetorA = [];
const vetorC = [];

for (let i = 0; i < 10; i++) {
  const elementoA = parseInt(
    prompt(`Digite um valor inteiro para o vetor A na posição ${i}: `)
  );
  vetorA.push(elementoA);
}

for (let i = 0; i < 10; i++) {
  const elementoB = parseInt(
    prompt(`Digite um valor inteiro para o vetor B na posição ${i}: `)
  );
  vetorB.push(elementoB);
}

for (let i = 0; i < 10; i++) {
  const elementoC = vetorA[i] - vetorB[i];
  vetorC.push(elementoC);
}

console.log(`Vetor C: ${vetorC}`);

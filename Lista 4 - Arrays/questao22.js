const prompt = require("prompt-sync")();

const vetorB = [];
const vetorA = [];
const vetorC = [];
let elementoA = 0;
let elementoB = 0;
let elementoC = 0;

for (let i = 0; i < 10; i++) {
  elementoA = parseInt(
    prompt(`Digite um valor inteiro para o vetor A na posição ${i}: `)
  );
  vetorA.push(elementoA);
}

for (let i = 0; i < 10; i++) {
  elementoB = parseInt(
    prompt(`Digite um valor inteiro para o vetor B na posição ${i}: `)
  );
  vetorB.push(elementoB);
}

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    elementoC = elementoA;
  }
  if (i % 2 !== 0) {
    elementoC = elementoB;
  }
  vetorC.push(elementoC);
}

console.log(`Vetor C: ${vetorC}`);

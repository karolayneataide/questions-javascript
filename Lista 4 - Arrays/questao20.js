const vetorImpar = [];
const vetor = [];
let elemento = 0;

for (let i = 0; i < 5; i += 0.5) {
  elemento = i;
  vetor.push(elemento);
  if (elemento % 2 !== 0) {
    vetorImpar.push(elemento);
  }
}

console.log(`Vetor: ${vetor}, Vetor Par: ${vetorImpar}`);

console.log("Vetor:");
for (let i = 0; i < vetor.length; i++) {}

console.log("Vetor:");
for (let i = 0; i < vetor.length; i += 2) {
  console.log(`${vetor[i]} ${vetor[i + 1]}`);
}

console.log("Vetor Impar:");
for (let i = 0; i < vetorImpar.length; i += 2) {
  console.log(`${vetorImpar[i]} ${vetorImpar[i + 1]}`);
}

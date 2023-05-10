const vetor = [1, 0, 5, -2, -5, 7];
console.log("Array de 6 números", vetor);

const soma = vetor[0] + vetor[1] + vetor[2];
console.log("Soma: ", soma);

vetor[4] = 100;
console.log("Array com 100, na posição 4: ", vetor);

for (let i = 0; i < vetor.length; i++) {
  console.log(vetor[i]);
}

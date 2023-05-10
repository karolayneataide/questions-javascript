let vetor = [5, 7, 25, 14, 65, 98, 85, 0, 4, 2];
let contador = 0;

for (let i = 0; i < 10; i++) {
  if (vetor[i] % 2 == 0) {
    contador++;
  }
}
console.log(`O vetor possui ${contador} valores pares.`);

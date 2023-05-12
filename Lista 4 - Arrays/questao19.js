const vetor = [];
let vetorNovo = [];

for (let i = 0; i < 50; i++) {
  const equacaoPrincipal = (i + 5 * i) % (i + 1);
  vetorNovo.push(equacaoPrincipal);
}

console.log(vetorNovo);

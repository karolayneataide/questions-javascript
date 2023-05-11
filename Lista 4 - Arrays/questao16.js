const prompt = require("prompt-sync")();

const vetor = [];
const vetorInverso = [];

for (let i = 0; i < 5; i++) {
  const elemento = parseFloat(prompt("Digite um valor: "));
  vetor.push(elemento);
}

const código = parseInt(prompt("Digite o código: 0, 1 ou 2: "));
if (código === 0) {
  console.log("Programa finalizado");
}
if (código === 1) {
  console.log(`Vetor na ordem direta: ${vetor}`);
}
if (código === 2) {
  for (let j = vetor.length - 1; j >= 0; j--) {
    vetorInverso.push(vetor[j]);
    console.log(vetorInverso);
  }
  if (código !== 1 && código !== 2 && código !== 0) {
    console.log("Código finalizado");
  }
}

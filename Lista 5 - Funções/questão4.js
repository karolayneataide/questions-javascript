const prompt = require("prompt-sync")();

const numero = parseInt(prompt("Digite um número inteiro: "));

let quadrado;

function quadradoPerfeito(numero) {
  quadrado = Math.sqrt(numero);
  if (Number.isInteger(quadrado)) {
    console.log(`o número ${quadrado} é quadrado perfeito`);
  } else {
    console.log(`o número ${quadrado} não é quadrado perfeito`);
  }
  return quadrado;
}
quadradoPerfeito(numero);

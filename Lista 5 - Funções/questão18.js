const prompt = require("prompt-sync")();

const valorX = parseInt(prompt("Digite o valor de X: "));
const valorZ = parseInt(prompt("Digite o valor de Z: "));

let exponenciacao = 1;

function exponencial(valorX, valorZ) {
  for (let i = 0; i < valorZ; i++) {
    exponenciacao *= valorX;
  }

  return exponenciacao;
}

const resultado = exponencial(valorX, valorZ);

console.log(resultado);

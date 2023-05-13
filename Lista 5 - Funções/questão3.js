const prompt = require("prompt-sync")();

const numero = parseInt(prompt("Digite um número inteiro: "));

function positivoOuNegativo(numero) {
  let resultado = 0;
  if (numero > 0) {
    resultado = 1;
  }
  if (numero === 0) {
    resultado = 0;
  }
  if (numero < 0) {
    resultado = -1;
  }

  return resultado;
}

const resultadoDaFuncao = positivoOuNegativo(numero);
console.log(resultadoDaFuncao);

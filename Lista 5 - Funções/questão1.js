const prompt = require("prompt-sync")();

const numero = parseInt(prompt("Digite um número inteiro: "));

function dobroDeNumero(numero) {
  const dobro = numero * 2;

  return dobro;
}

const resultadoDaFuncao = dobroDeNumero(numero);
console.log(resultadoDaFuncao);

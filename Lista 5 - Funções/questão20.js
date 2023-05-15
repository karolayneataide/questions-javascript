const prompt = require("prompt-sync")();

const numero = parseInt(prompt("Digite um numero inteiro e positivo: "));

function fatorial(numero) {
  let fator = 1;
  for (let i = 1; i <= numero; i++) {
    fator *= i;
  }
  console.log(fator);
}

fatorial(numero);

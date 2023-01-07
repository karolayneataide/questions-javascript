const prompt = require("prompt-sync")();

const numero = parseInt(
  prompt(
    "Digite um número inteiro, para obter o sucessor de seu triplo com o antecessor de seu dobro: "
  )
);
const antecessorDobro = numero * 3 + 1;
const sucessorTriplo = numero * 2 - 1;

const resultado = sucessorTriplo + antecessorDobro;

console.log(resultado);

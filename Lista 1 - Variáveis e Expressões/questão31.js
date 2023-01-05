const prompt = require("prompt-sync")();

const numero = parseInt(
  prompt(
    "Digite um número real, para obter o seu antecessor e o sucessor, respectivamente: "
  )
);

const antecessor = numero - 1;
const sucessor = numero + 1;

console.log(antecessor, sucessor);

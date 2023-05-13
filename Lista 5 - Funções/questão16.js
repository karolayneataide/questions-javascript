const prompt = require("prompt-sync")();

const numero = parseInt(
  prompt("Digite um número inteiro, positivo e diferente de zero: ")
);

function desenhaLinha(numero) {
  let igual = "";

  if (numero <= 0 || isNaN(numero)) {
    console.log("Número inválido!");
  } else {
    for (let i = 0; i < numero; i++) {
      igual += "=";
    }
  }

  console.log(igual);
}

desenhaLinha(numero);

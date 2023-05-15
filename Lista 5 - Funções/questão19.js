const prompt = require("prompt-sync")();

const numero = parseInt(prompt("Digite um número inteiro: "));

function maiorFatorPrimo(numero) {
  let maiorFator = 1;

  for (let i = 2; i <= numero; i++) {
    while (numero % i === 0) {
      maiorFator = i;
      numero /= i;
    }
  }

  return maiorFator;
}

const resultado = maiorFatorPrimo(numero);

console.log(resultado);

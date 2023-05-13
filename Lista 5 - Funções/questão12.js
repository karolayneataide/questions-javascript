const prompt = require("prompt-sync")();

const numero = parseInt(prompt("Digite um número: "));

function somarNumeros(numero) {
  let soma = 0;

  if (numero === 0) {
    console.log("Número inválido");
  } else {
    for (let i = 0; i < numero.length; i++) {
      let numeroSeparado = parseInt(numero.charAt(i));
      soma += numeroSeparado;
    }
    console.log(`Soma dos algarísmos: ${soma}`);
  }
}

somarNumeros(numero);

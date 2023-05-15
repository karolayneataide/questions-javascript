const prompt = require("prompt-sync")();

const numero1 = parseInt(prompt("Digite um número inteiro: "));
const numero2 = parseInt(
  prompt(
    "Digite um número inteiro, maior que o número digitado anteriormente: "
  )
);

function somarNumeros(numero1, numero2) {
  let soma = 0;
  const diferencaNumero = numero2 - numero1;
  if (numero2 > numero1) {
    for (let i = numero1; i <= diferencaNumero + numero1; i++) {
      soma += i;
    }
  } else {
    console.log("Valor inválido");
  }

  return soma;
}

const resultado = somarNumeros(numero1, numero2);

console.log(resultado);

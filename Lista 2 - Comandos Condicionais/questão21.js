const prompt = require("prompt-sync")();

console.log(
  "Escolha a opção: 1- Soma de 2 números. 2- Diferença entre 2 números (maior pelo menor). 3- Produto entre 2 números. 4- Divisão entre 2 números (o denominador não pode ser zero): "
);

const opcao = parseInt(prompt("Digite uma opção: "));

switch (opcao) {
  case 1:
    const numero1 = Number(prompt("Digite um numero: "));
    const numero2 = Number(prompt("Digite um numero: "));

    const soma = numero1 + numero2;

    console.log("Soma: ", soma);
    break;

  case 2:
    const numero3 = Number(prompt("Digite um numero: "));
    const numero4 = Number(prompt("Digite um numero: "));

    const subtracao = numero3 - numero4;

    console.log("Subtração: ", subtracao);
    break;

  case 3:
    const numero5 = Number(prompt("Digite um numero: "));
    const numero6 = Number(prompt("Digite um numero: "));

    const multiplicacao = numero5 * numero6;

    console.log("Multiplicação: ", multiplicacao);
    break;

  case 4:
    const numero7 = Number(prompt("Digite um numero: "));
    const numero8 = Number(prompt("Digite um numero: "));

    if (numero8 != 0) {
      const divisao = numero7 / numero8;

      console.log("Divisão: ", divisao);
    } else {
      console.log("Número digitado inválido");
    }
    break;
}

const prompt = require("prompt-sync")();

console.log(
  "Faça um programa que mostre ao usuario um menu com 4 opções de operações matemáticas (as básicas, por exemplo). O usuário escolhe uma das opções e o seu programa entao pede dois valores numéricos e realiza a operação, mostrando o resultado e saindo"
);

const simbolo = String(
  prompt(
    "Digite um dos simbolos de operações para executar um cálculo ( +, -, *, / ) :"
  )
);

switch (simbolo) {
  case "+":
    const numero1 = Number(prompt("Digite um numero: "));
    const numero2 = Number(prompt("Digite um numero: "));

    const soma = numero1 + numero2;

    console.log("Soma: ", soma);
    break;

  case "-":
    const numero3 = Number(prompt("Digite um numero: "));
    const numero4 = Number(prompt("Digite um numero: "));

    const subtracao = numero3 - numero4;

    console.log("Subtração: ", subtracao);
    break;

  case "*":
    const numero5 = Number(prompt("Digite um numero: "));
    const numero6 = Number(prompt("Digite um numero: "));

    const multiplicacao = numero5 * numero6;

    console.log("Multiplicação: ", multiplicacao);
    break;

  case "/":
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

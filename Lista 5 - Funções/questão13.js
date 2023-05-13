const prompt = require("prompt-sync")();

const numero1 = Number(prompt("Digite um número inteiro: "));
const numero2 = Number(prompt("Digite um número inteiro: "));
const operacao = String(
  prompt(
    "Digite uma operação, se quiser somar +, se quiser subtrair -, se quiser multiplicar *, se quiser dividir /  : "
  )
);

let resultado;

function calculo(numero1, numero2, operacao) {
  if (operacao === "+") {
    resultado = numero1 + numero2;

    console.log(`Soma: ${resultado}`);
  } else if (operacao === "-") {
    resultado = numero1 - numero2;

    console.log(`Subtração: ${resultado}`);
  } else if (operacao === "*") {
    resultado = numero1 * numero2;

    console.log(`Multiplicação: ${resultado}`);
  } else if (operacao === "/") {
    resultado = numero1 / numero2;
  }

  console.log(`Divisão: ${resultado}`);
}

calculo(numero1, numero2, operacao);

const prompt = require("prompt-sync")();

console.log(
  "Faça um programa que leia tres números inteiros positivos e efetue o cálculo de uma das seguintes medias de acordo com um valor numérico digitado pelo usuário: "
);

const numero1 = parseInt(prompt("Digite um número: "));
const numero2 = parseInt(prompt("Digite um número: "));
const numero3 = parseInt(prompt("Digite um número: "));

if (numero1 > 0 && numero2 > 0 && numero3 > 0) {
  const geometrica = Math.cbrt(numero1 * numero2 * numero3);

  const ponderada = (numero1 + 2 * numero2 + 3 * numero3) / 6;

  const harmonica = 1 / (1 / numero1 + 1 / numero2 + 1 / numero3);

  const aritmetica = (numero1 + numero2 + numero3) / 3;

  return console.log(
    "A: ",
    geometrica,
    ", B: ",
    ponderada,
    ", C: ",
    harmonica,
    ", D: ",
    aritmetica
  );
} else {
  return console.log(
    "Número inválido. É permitido apenas número inteiro e positivo!"
  );
}

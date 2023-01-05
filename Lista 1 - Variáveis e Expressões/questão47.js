const prompt = require("prompt-sync")();

console.log(
  "Faça um programa que leia um numero de quatro dígitos (de 1000 a 9999). Imprima 1 dígito por linha."
);

const numero = parseInt(prompt("Digite um numero: "));

if ((numero < 9999) & (numero > 1000)) {
  const digitosSeparados = numero.toString().split("");
  return (
    console.log(digitosSeparados[0]),
    console.log(digitosSeparados[1]),
    console.log(digitosSeparados[2]),
    console.log(digitosSeparados[3])
  );
} else {
  console.log("Esse número não é válido");
}

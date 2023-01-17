const prompt = require("prompt-sync")();

console.log(
  "Faça um programa que leia um numero e, caso ele seja positivo, calcule e mostre: • O numero digitado ao quadrado, • A raiz quadrada do numero digitado "
);

const numero = Number(prompt("Digite um número: "));

if (numero > 0) {
  return (
    console.log("Número ao quadrado: ", numero * numero),
    console.log("Raiz quadrada: ", Math.sqrt(numero))
  );
} else {
  return console.log("Dado inválido");
}

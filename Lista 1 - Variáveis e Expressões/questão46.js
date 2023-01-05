const prompt = require("prompt-sync")();

console.log(
  "Faça um programa que leia um numero inteiro positivo de três dígitos (de 100 a 999). Gere outro numero formado pelos dígitos invertidos do numero lido."
);

const numero = parseInt(prompt("Digite um numero: "));

if ((numero < 999) & (numero > 100)) {
  const invertido = numero.toString().split("").reverse().join("");
  return console.log(invertido);
} else {
  console.log("Esse número não é válido");
}

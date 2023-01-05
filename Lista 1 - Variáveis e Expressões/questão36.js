const prompt = require("prompt-sync")();

console.log(
  "Leia a altura e o raio de um cilindro circular e imprima o volume do cilindro"
);

const altura = Number(prompt("Digite o valor da altura: "));

const raio = Number(prompt("Digite o Valor do raio: "));

const cilindro = 3.141592 * raio * raio * altura;
console.log(cilindro);

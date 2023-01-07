const prompt = require("prompt-sync")();

console.log(
  "Implemente um programa que calcule o ano de nascimento de uma pessoa a partir de sua idade e do ano atual."
);

const idade = parseInt(prompt("Digite a sua idade: "));
const dataDeHoje = new Date().getFullYear();

const anoNascimento = dataDeHoje - idade;

console.log(anoNascimento);

const prompt = require("prompt-sync")();

const numero1 = Math.sqrt(Number(prompt("Digite um número: ")));

const numero2 = Math.sqrt(Number(prompt("Digite um segundo número: ")));

const numero3 = Math.sqrt(Number(prompt("Digite um terceiro número: ")));

const soma = numero1 + numero2 + numero3;

console.log(soma);

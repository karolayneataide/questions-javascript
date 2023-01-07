const prompt = require("prompt-sync")();

console.log("Leia o Valor de A e o de B, e imprima o valor da hipotenusa: ");

const a = Number(prompt("Digite o Valor de A: "));
const b = Number(prompt("Digite o Valor de B: "));

const hipotenusa = Math.sqrt(a * a + b * b);

console.log(hipotenusa);

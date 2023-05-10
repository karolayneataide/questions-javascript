const prompt = require("prompt-sync")();

let vetor = [2, 24, 19, 7, 4, 17, 29, 18];

const valorX = parseInt(prompt("Digite um valor de X: "));
const valorY = parseInt(prompt("Digite um valor de Y: "));

vetor.push(valorX);
vetor.push(valorY);

const soma = valorX + valorY;

console.log(`Soma de X e Y : ${soma}`);

const prompt = require("prompt-sync")();

const a = Number(prompt("Digite o valor de a: "));
const b = Number(prompt("Digite o valor de b: "));

let hipotenusa;

function valorHipotenusa(a, b) {
  hipotenusa = Math.sqrt(a * a + b * b);
  return hipotenusa;
}

const resultado = valorHipotenusa(a, b);

console.log(resultado);

const prompt = require("prompt-sync")();

const altura = Number(prompt("Digite o valor da altura: "));
const raio = Number(prompt("Digite o valor do raio: "));

let volume;

function volumeCilindro(altura, raio) {
  volume = 3.141592 * raio * raio * altura;
  return volume;
}

const resultado = volumeCilindro(altura, raio);

console.log(resultado);

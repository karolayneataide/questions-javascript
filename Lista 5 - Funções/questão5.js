const prompt = require("prompt-sync")();

const raio = Number(
  prompt("Digite o valor do raio para obter o volume da esfera: ")
);

let volume;

function volumeEsfera(raio) {
  volume = (4 / 3) * 3.14 * raio * raio * raio;
  console.log(volume);
}
volumeEsfera(raio);

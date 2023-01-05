const prompt = require("prompt-sync")();

console.log(
  "Receba a altura do degrau de uma escada e a altura que o usuario deseja alcançar subindo a escada. Calcule e mostre quantos degraus o usuario deverá subir para atingir seu objetivo. "
);

const alturaDegrau = Number(
  prompt("Digite a altura do degrau de uma escada: ")
);
const alturaAlmejada = Number(
  prompt("Digite a altura almejada que deseja subir: ")
);

const degrausNecessarios = alturaAlmejada / alturaDegrau;

console.log(
  "A quantidade de degraus que deverá subir será de: ",
  degrausNecessarios
);

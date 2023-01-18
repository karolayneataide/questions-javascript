const prompt = require("prompt-sync")();

console.log(
  " Leia a distancia em Km e a quantidade de litros de gasolina consumidos por um carro em um percurso, calcule o consumo em Km/l e escreva uma mensagem de acordo com a tabela abaixo: "
);

const distanciaKM = Number(prompt("Digite o valor de A: "));
const quantidadeLitros = Number(prompt("Digite o valor de B: "));

const consumo = distanciaKM / quantidadeLitros;

if (consumo >= 8) {
  if (consumo <= 12) {
    return console.log("Econômico, consumo KM/L: ", consumo);
  } else {
    return console.log("Super econômico, consumo KM/L: ", consumo);
  }
} else {
  return console.log("Venda o carro! consumo KM/L: ", consumo);
}

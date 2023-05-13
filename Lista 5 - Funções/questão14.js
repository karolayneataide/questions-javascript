const prompt = require("prompt-sync")();

const litroGasolina = Number(
  prompt("Digite a quantidade de litros de gasolina: ")
);
const distanciaKm = Number(prompt("Digite a distância em Km: "));

let consumo;

function consumoCarro(distanciaKm, litroGasolina) {
  consumo = distanciaKm / litroGasolina;
  if (consumo < 8) {
    console.log("Venda o carro!");
  } else if (consumo > 8 && consumo < 14) {
    console.log("Econômico!");
  } else if (consumo > 14) {
    console.log("Super econômico!");
  }

  return consumo;
}

consumoCarro(distanciaKm, litroGasolina);

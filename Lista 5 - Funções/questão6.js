const prompt = require("prompt-sync")();

const hora = parseInt(prompt("Digite a hora: "));

const minutos = parseInt(prompt("Digite os minutos: "));

const segundos = parseInt(prompt("Digite os segundos: "));

let segundosTotais, horaParaSegundos, minutosParaSegundos;

function converterEmSegundos(hora, minutos, segundos) {
  horaParaSegundos = hora * 360;
  minutosParaSegundos = minutos * 60;
  segundosTotais = horaParaSegundos + minutosParaSegundos + segundos;

  console.log(`Total de segundos: ${segundosTotais}`);
}
converterEmSegundos(hora, minutos, segundos);

const prompt = require("prompt-sync")();

console.log(
  "Leia um valor inteiro em segundos, e imprima-o em horas, minutos e segundos."
);

const tempoEmSegundos = parseInt(prompt("Digite os segundos: "));
const milisegundos = new Date(tempoEmSegundos * 1000);
const horas = milisegundos.getUTCHours();
const minutos = milisegundos.getUTCMinutes();
const segundos = milisegundos.getUTCSeconds();

const time =
  horas.toString().padStart(2, "0") +
  ":" +
  minutos.toString().padStart(2, "0") +
  ":" +
  segundos.toString().padStart(2, "0");

console.log(time);

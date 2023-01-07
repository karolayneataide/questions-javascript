const prompt = require("prompt-sync")();

console.log(
  "Leia um valor inteiro em segundos, e imprima-o em horas, minutos e segundos."
);

const dataDeHoje = new Date(0, 0);
const tempoEmSegundos = parseInt(prompt("Digite os segundos: "));
dataDeHoje.setSeconds(tempoEmSegundos);

const horas = dataDeHoje.getHours().toString().padStart(2, 0);
const minutos = dataDeHoje.getMinutes().toString().padStart(2, 0);
const segundos = dataDeHoje.getSeconds().toString().padStart(2, 0);

console.log(`${horas}:${minutos}:${segundos}`);

const prompt = require("prompt-sync")();

console.log(
  "Faça um programa para leia o horario (hora, minuto e segundo) de inicio e a duração, em segundos, de uma experiencia biológica. O programa deve resultar com o novo horário (hora, minuto e segundo) do termino da mesma."
);

const dataDeHoje = new Date();
const hora = parseInt(prompt("Digite a hora: "));
const minuto = parseInt(prompt("Digite o minuto: "));
const segundo = parseInt(prompt("Digite o segundo: "));
dataDeHoje.setHours(hora);
dataDeHoje.setMinutes(minuto);

const duracao = parseInt(prompt("Tempo de duração em segundos: "));
dataDeHoje.setSeconds(segundo + duracao);

const horas = dataDeHoje.getHours().toString().padStart(2, 0);
const minutos = dataDeHoje.getMinutes().toString().padStart(2, 0);
const segundos = dataDeHoje.getSeconds().toString().padStart(2, 0);

console.log(`Novo horário: ${horas}:${minutos}:${segundos}`);

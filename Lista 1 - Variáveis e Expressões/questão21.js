const prompt = require("prompt-sync")();

const lib = Number(
  prompt("Digite uma massa em libras para obtê-la em quilogramas: ")
);
const kg = lib * 0.45;
console.log(kg);

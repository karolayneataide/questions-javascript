const prompt = require("prompt-sync")();

const kg = Number(
  prompt("Digite uma massa em quilogramas para obtê-la em libras: ")
);
const lib = kg / 0.45;
console.log(lib);

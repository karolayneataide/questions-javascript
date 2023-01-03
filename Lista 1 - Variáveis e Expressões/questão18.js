const prompt = require("prompt-sync")();

const m3 = Number(
  prompt("Digite um volume em metros cubicos para obtê-lo em litros: ")
);
const li = m3 * 1000;
console.log(li);

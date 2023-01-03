const prompt = require("prompt-sync")();

const li = Number(
  prompt("Digite um volume em litros para obtê-lo em metros cubicos: ")
);
const m3 = li / 1000;
console.log(m3);

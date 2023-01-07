const prompt = require("prompt-sync")();

const metros = Number(
  prompt("Digite um comprimento em metros, para obtê-lo em jardas: ")
);

const jardas = metros / 0.91;

console.log(jardas);

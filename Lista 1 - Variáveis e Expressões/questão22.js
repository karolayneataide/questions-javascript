const prompt = require("prompt-sync")();

const jardas = Number(
  prompt("Digite um comprimento em jardas, para obtê-lo em metros: ")
);
const metros = jardas * 0.91;
console.log(metros);

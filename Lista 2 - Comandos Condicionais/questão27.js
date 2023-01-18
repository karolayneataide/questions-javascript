const prompt = require("prompt-sync")();

console.log(
  " Escreva um programa que, dada a idade de um nadador e classifique-o: "
);

const idade = parseInt(prompt("Digite o valor de A: "));

if (idade >= 5 && idade <= 7) {
  return console.log("Infantil A");
}
if (idade >= 8 && idade <= 10) {
  return console.log("Infantil B");
}
if (idade >= 11 && idade <= 13) {
  return console.log("Juvenil A");
}
if (idade >= 14 && idade <= 17) {
  return console.log("Juvenil B");
}
if (idade >= 18) {
  return console.log("Sênior");
}

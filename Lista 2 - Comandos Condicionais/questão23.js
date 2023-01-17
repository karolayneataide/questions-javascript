const prompt = require("prompt-sync")();

console.log(
  " Determine se um determinado ano lido é bissexto. Sendo que um ano é bissexto se for divisível por 400 ou se for divisível por 4 e nao for divisível por 100. Por exemplo: 1988, 1992, 1996"
);

const ano = parseInt(prompt("Digite um ano: "));

if ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
  return console.log("Ano bissexto");
} else {
  console.log("Ano não bissexto");
}

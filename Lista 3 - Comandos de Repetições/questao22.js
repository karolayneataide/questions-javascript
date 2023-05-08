const prompt = require("prompt-sync")();

const notas = [];
let soma = 0;
let mediaAritmetica = 0;

for (let i = 0; i <= 5; i++) {
  const nota = parseInt(prompt("Digite uma nota entre 10 e 20: "));

  if (nota >= 10 && nota <= 20) {
    notas.push(nota);
    soma += nota;
    mediaAritmetica += soma / notas.length;

    console.log(`A média aritmética das notas é ${mediaAritmetica}`);
  } else {
    console.log("Valor inválido");
  }
}

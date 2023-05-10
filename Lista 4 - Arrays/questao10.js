const prompt = require("prompt-sync")();

let notas = [];
let mediaNotas = 0;
let soma = 0;
let amostra = 0;

for (let i = 0; i < 15; i++) {
  const nota = Number(parseInt(prompt("Digite o valor da nota: ")));
  notas.push(nota);
  soma += nota;
  amostra = notas.length;
  mediaNotas = soma / amostra;
}
console.log(`Notas dos alunos: ${notas}, média das notas: ${mediaNotas} `);

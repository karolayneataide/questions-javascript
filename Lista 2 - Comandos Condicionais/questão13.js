const prompt = require("prompt-sync")();

console.log(
  "Faça um algoritmo que calcule a media ponderada das notas de 3 provas. A primeira e a segunda prova tem peso 1 e a terceira tem peso 2. Ao final, mostrar a média do aluno e indicar se o aluno foi aprovado ou reprovado. A nota para aprovação deve ser igual ou superior a 60 pontos."
);

const nota1 = Number(prompt("Digite a primeira nota: "));
const nota2 = Number(prompt("Digite a segunda nota: "));
const nota3 = Number(prompt("Digite a terceira nota: "));

const nota3ComPeso = nota3 * 2;
const media = (nota1 + nota2 + nota3ComPeso) / 3;

if (media >= 60) {
  return console.log("Aluno aprovado");
} else {
  return console.log("Aluno reprovado");
}

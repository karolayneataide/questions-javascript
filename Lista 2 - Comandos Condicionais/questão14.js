const prompt = require("prompt-sync")();

console.log(
  "A nota final de um estudante e calculada a partir de três notas atribuídas entre o intervalo de 0 ate 10, respectivamente, a um trabalho de laboratório, a uma avaliação semestral e a um exame final. A média das três notas mencionadas anteriormente obedece aos pesos: Trabalho de Laboratorio: 2; Avaliação Semestral: 3; Exame Final: 5. De acordo com o resultado, mostre na tela se o aluno esta reprovado (média entre 0 e 2,9), de recuperação (entre 3 e 4,9) ou se foi aprovado. Faça todas as verificações necessárias."
);

const nota1 = Number(prompt("Digite uma nota de 0 a 10: ")) * 0.2;
const nota2 = Number(prompt("Digite uma nota de 0 a 10: ")) * 0.3;
const nota3 = Number(prompt("Digite uma nota de 0 a 10: ")) * 0.5;

const media = nota1 + nota2 + nota3;

if (
  nota1 >= 0 &&
  nota1 <= 10 &&
  nota2 >= 0 &&
  nota2 <= 10 &&
  nota3 >= 0 &&
  nota3 <= 10
) {
  if (media >= 0 && media <= 2.9) {
    console.log("Reprovado, média: ", media);
  }
  if (media >= 3 && media <= 4.9) {
    console.log("Recuperação, média: ", media);
  }
  if (media >= 5 && media <= 10) {
    console.log("Aprovado, média: ", media);
  }
} else {
  console.log("Nota inválida, a nota deve ser de 0 a 10");
}

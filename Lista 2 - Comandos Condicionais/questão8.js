const prompt = require("prompt-sync")();

console.log(
  "Faça um programa que leia 2 notas de um aluno, verifique se as notas sao válidas e exiba na tela a media destas notas. Uma nota válida deve ser, obrigatoriamente, um valor entre 0.0 e 10.0, onde caso a nota nao possua um valor válido, este fato deve ser informado ao usuario e o programa termina."
);

const nota1 = Number(prompt("Digite uma nota: "));
const nota2 = Number(prompt("Digite mais um nota: "));

if (10 >= nota1 && nota1 >= 0 && 10 >= nota2 && nota2 >= 0) {
  {
    const media = (nota1 + nota2) / 2;
    return console.log("Média: ", media);
  }
} else {
  return console.log("Nota não possui valor válido");
}

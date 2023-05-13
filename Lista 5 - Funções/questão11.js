const prompt = require("prompt-sync")();

console.log("Digite dois números para descobrir o maior.");
const nota1 = Number(prompt("Digite uma nota: "));
const nota2 = Number(prompt("Digite uma nota: "));
const nota3 = Number(prompt("Digite uma nota: "));
const letra = String(prompt("Digite a letra A ou P: "));

let media, mediaPonderada;

function nota(nota1, nota2, nota3, letra) {
  if (letra === "A") {
    media = (nota1 + nota2 + nota3) / 3;

    console.log(`Média: ${media}`);
  }
  if (letra === "P") {
    mediaPonderada = nota1 * 0.5 + nota2 * 0.3 + nota3 * 0.2;

    console.log(`Média: ${mediaPonderada}`);
  }
  if (letra !== "A" && letra !== "P") {
    console.log("Letra inválida");
  }
}

nota(nota1, nota2, nota3, letra);

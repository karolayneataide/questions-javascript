const prompt = require("prompt-sync")();

console.log("Calcule as raízes da equação de segundo grau.");

const valorA = Number(prompt("Digite o valor de A: "));
const valorB = Number(prompt("Digite o valor de B: "));
const valorC = Number(prompt("Digite o valor de C: "));

if (valorA != 0) {
  const raiz = Math.sqrt(valorB * valorB - 4 * valorA * valorC);

  if (raiz == 0) {
    return console.log(raiz, " Raiz única");
  }
  if (raiz >= 0) {
    const raiz2 = raiz * -1;
    return console.log(raiz, raiz2, " Duas raízes reais");
  } else {
    return console.log(" Não existe raiz.");
  }
} else {
  return console.log("Não é uma equação de segundo grau.");
}

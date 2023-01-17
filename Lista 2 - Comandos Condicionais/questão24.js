const prompt = require("prompt-sync")();

console.log(
  "Uma empresa vende o mesmo produto para quatro diferentes estados. Cada estado possui uma taxa diferente de imposto sobre o produto (MG 7%; SP 12%; RJ 15%; MS 8%). Faça um programa em que o usuario entre com o valor e o estado destino do produto e o programa retorne o preço final do produto acrescido do imposto do estado em que ele sera vendido. Se o estado digitado não for válido, mostrar uma mensagem de erro. "
);

const valor = Number(prompt("Digite o valor do produto: "));
const estado = String(prompt("Digite o estado em forma de acrônimo: "));

switch (estado) {
  case "MG":
    const valorMG = valor * 1.07;
    console.log(valorMG);
    break;

  case "SP":
    const valorSP = valor * 1.12;
    console.log(valorSP);
    break;

  case "RJ":
    const valorRJ = valor * 1.15;
    console.log(valorRJ);
    break;

  case "MS":
    const valorMS = valor * 1.08;
    console.log(valorMS);
    break;

  default:
    console.log("Indisponível para essa localidade");
}

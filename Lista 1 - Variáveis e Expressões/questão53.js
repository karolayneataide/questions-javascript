const prompt = require("prompt-sync")();

console.log(
  "Faça um programa para ler as dimensoes de um terreno (comprimento c e largura l), bem como o preço do metro de tela p. Imprima o custo para cercar este mesmo terreno com tela."
);

const c = Number(prompt("Digite o comprimento: "));
const l = Number(prompt("Digite a largura: "));
const precoTela = Number(prompt("Digite o preço do metro de tela: "));

const areaTerreno = c * l;
const precoTelaTotal = areaTerreno * precoTela;

console.log("Custo: R$ ", precoTelaTotal);

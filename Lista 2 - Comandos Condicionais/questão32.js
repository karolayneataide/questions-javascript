const prompt = require("prompt-sync")();

const codigo = parseInt(prompt("Digite o código: "));

switch (codigo) {
  case 100:
    console.log("Cachorro Quente, R$ 1.20");
    break;
  case 101:
    console.log("Bauru Simples, R$ 1.30");
    break;
  case 102:
    console.log("Bauru com Ovo, R$ 1.50");
    break;
  case 103:
    console.log("Hamburguer, R$ 1.20");
    break;
  case 104:
    console.log("Cheeseburguer, R$ 1.70");
    break;
  case 105:
    console.log("Suco , R$ 2.20");
    break;
  case 106:
    console.log("Refrigerante, R$ 1.00");
    break;
  default:
    console.log("Código inválido");
    break;
}

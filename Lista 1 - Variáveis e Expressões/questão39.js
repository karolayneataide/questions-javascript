const prompt = require("prompt-sync")();

console.log(
  "A importancia de R$ 780.000,00 será dividida entre três ganhadores de um concurso. Sendo que da quantia total. O primeiro ganhador receberá 46%, O segundo recebera 32%,  O terceiro recebera o restante. Calcule e imprima a quantia ganha por cada um dos ganhadores"
);

const premio = 780000;

const ganhador1 = premio * 1.46;
const ganhador2 = premio * 1.32;
const ganhador3 = premio * 1.22;

console.log("O valor do primeiro colocado será de: R$ ", ganhador1);
console.log("O valor do segundo colocado será de: R$ ", ganhador2);
console.log("O valor do terceiro colocado será de: R$ ", ganhador3);

const prompt = require("prompt-sync")();

const a = Number(
  prompt(
    "Digite o Valor de A, e pressione ENTER, para a seguir digitar o de B, para obter o valor da hipotenusa: "
  )
);

const b = Number(prompt("Digite o Valor de B: "));

const hipotenusa = Math.sqrt(a * a + b * b);
console.log(hipotenusa);

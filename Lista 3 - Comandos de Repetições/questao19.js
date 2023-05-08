const prompt = require("prompt-sync")();

let numero = parseInt(
  prompt("Digite um número inteiro e positivo entre 100 e 999: ")
);

if (numero >= 100 && numero <= 999) {
  let numeroString = numero.toString();

  for (let i = 0; i < numeroString.length; i++) {
    console.log(numeroString.charAt(i));
  }
} else {
  console.log("Número inválido");
}

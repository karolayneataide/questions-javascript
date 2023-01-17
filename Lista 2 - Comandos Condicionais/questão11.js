const prompt = require("prompt-sync")();

console.log(
  "Escreva um programa que leia um numero inteiro maior do que zero e devolva, na tela, a soma de todos os seus algarismos. Por exemplo, ao numero 251 corresponderá o valor 8 (2 + 5 + 1). Se o numero lido não for maior do que zero, o programa terminará com a mensagem “Numero inválido”."
);

const numero = parseInt(prompt("Digite um número inteiro: "));

if (numero > 0) {
  const valorInicial = 0;
  const numeroArray = numero.toString().split("");
  const soma = numeroArray.reduce(
    (acumulador, valorAtual) => acumulador + parseInt(valorAtual),
    valorInicial
  );
  console.log(soma);
} else {
  console.log("Número inválido");
}

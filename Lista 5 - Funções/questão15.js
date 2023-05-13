const prompt = require("prompt-sync")();

const lado1 = Number(
  prompt("Digite um lado do triângulo que seja maior que zero: ")
);
const lado2 = Number(
  prompt("Digite um lado do triângulo que seja maior que zero: ")
);
const lado3 = Number(
  prompt("Digite um lado do triângulo que seja maior que zero: ")
);

function triangulo(lado1, lado2, lado3) {
  if (lado3 <= 0 || lado1 <= 0 || lado2 <= 0) {
    console.log("Não é um triângulo!");
  } else if (
    lado1 + lado2 > lado3 &&
    lado1 + lado3 > lado2 &&
    lado2 + lado3 > lado1
  ) {
    if (lado1 === lado2 && lado2 === lado3) {
      console.log("Triângulo equilátero!");
    } else if (lado1 !== lado2 && lado2 !== lado3 && lado3 !== lado1) {
      console.log("Triângulo escaleno!");
    } else {
      console.log("Triângulo isósceles!");
    }
  }
}

triangulo(lado1, lado2, lado3);

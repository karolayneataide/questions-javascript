const prompt = require("prompt-sync")();

console.log("Digite dez números naturais para obter os ímpares.");

let impares = [];

for (let i = 0; i <= 10; i++) {
  const numeroDigitado = Number.parseInt(prompt("Digite um número natural: "));

  if (numeroDigitado % 2 == !0) {
    impares.push(numeroDigitado);
  }
  console.log(`Resultado: ${impares}`);
}

const prompt = require("prompt-sync")();

for (let i = 1000; i > 0; i++) {
  const numeroDigitado = Number.parseInt(prompt("Digite um número natural: "));

  if (numeroDigitado % 2 === 0) {
    console.log("par", numeroDigitado);
  } else {
    console.log("ímpar", numeroDigitado);
  }
  if (numeroDigitado === 1000) {
    console.log("Acabou o loop");
  }
}

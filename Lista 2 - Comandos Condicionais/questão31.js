const prompt = require("prompt-sync")();

const peso = Number(prompt("Digite o peso: "));
const altura = Number(prompt("Digite a altura: "));

if (altura < 1.2) {
  if (peso < 60) {
    return console.log("A");
  }
  if (peso >= 60 && peso <= 90) {
    return console.log("D");
  }
  if (peso > 90) {
    return console.log("G");
  }
}
if (altura >= 1.2 && altura <= 1.7) {
  if (peso < 60) {
    return console.log("B");
  }
  if (peso >= 60 && peso <= 90) {
    return console.log("E");
  }
  if (peso > 90) {
    return console.log("H");
  }
}
if (altura > 1.7) {
  if (peso < 60) {
    return console.log("C");
  }
  if (peso >= 60 && peso <= 90) {
    return console.log("F");
  }
  if (peso > 90) {
    return console.log("I");
  }
}

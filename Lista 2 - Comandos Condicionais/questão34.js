const prompt = require("prompt-sync")();

const nota = Number(prompt("Digite a nota: "));
const falta = parseInt(prompt("Digite o número de faltas: "));

if (nota >= 9 && nota <= 10) {
  if (falta > 20) {
    return console.log("Conceito B");
  } else {
    return console.log("Conceito A");
  }
}
if (nota >= 7.5 && nota <= 8.9) {
  if (falta > 20) {
    return console.log("Conceito C");
  } else {
    return console.log("Conceito B");
  }
}
if (nota >= 5 && nota <= 7.4) {
  if (falta > 20) {
    return console.log("Conceito C");
  } else {
    return console.log("Conceito D");
  }
}
if (nota >= 4 && nota <= 4.9) {
  if (falta > 20) {
    return console.log("Conceito D");
  } else {
    return console.log("Conceito E");
  }
}
if (nota >= 0 && nota <= 3.9) {
  if (falta > 20) {
    return console.log("Conceito E");
  } else {
    return console.log("Conceito F");
  }
}

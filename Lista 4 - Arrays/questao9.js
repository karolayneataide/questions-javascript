const prompt = require("prompt-sync")();

let inverso = [];
let par = [];

for (let i = 0; i < 6; i++) {
  const elemento = parseInt(prompt("Digite um valor inteiro: "));
  if (elemento % 2 == 0) {
    par.push(elemento);
  }
}

if (par.length > 0) {
  for (let i = par.length - 1; i >= 0; i--) {
    inverso.push(par[i]);
  }
}

console.log(`Array par e inverso: ${inverso}`);

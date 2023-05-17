const numeros = [1, 2, 3, 5, 98, 123, 1];

let maior = -Infinity;
let menor = Infinity;

numeros.forEach((item) => {
  if (item > maior) {
    maior = item;
  } else if (item < menor) {
    menor = item;
  }
});

console.log(` O maior é: ${maior}, o menor é: ${menor}`);

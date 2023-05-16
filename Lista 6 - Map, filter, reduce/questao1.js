const numeros = [1, 2, 3, 5, 98, 123, 1];

const soma = numeros.reduce(
  (previusValue, currentValue) => previusValue + currentValue
);

console.log(soma);

const numeros = [1, 2, 5, 300, 98, 123, 10, 55, 100];

function multiploDe5(items) {
  const multiplo = items.filter((item) => item % 5 === 0);

  return multiplo;
}

console.log(multiploDe5(numeros));

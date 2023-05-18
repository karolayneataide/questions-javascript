const numeros = [1, 2, 5, 3, 5, 98, 123, 1];

function primeiroMaiorQue20(items) {
  const numerosMaioresQue20 = items.filter((item) => item > 20);

  if (numerosMaioresQue20.length > 0) {
    return numerosMaioresQue20[0];
  } else {
    return 0;
  }
}

console.log(primeiroMaiorQue20(numeros));

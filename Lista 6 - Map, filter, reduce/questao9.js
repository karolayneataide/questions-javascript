const numeros = [1, 2, 5, 3, 5, 98, 123, 1];

let tirarDuplicado;

function removerDuplicados(items) {
  const tirarDuplicado = items.filter((item, index, array) => {
    return array.indexOf(item) === index;
  });
  return tirarDuplicado;
}

console.log(removerDuplicados(numeros));

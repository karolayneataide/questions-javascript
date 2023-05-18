const numeros = [1, 2, 5, 3, 3, 3, 5, 5, 98, 123];

function elementosUnicos(items) {
  const elementos = items.filter((item, index, array) => {
    return array.indexOf(item) === index;
  });
  return elementos;
}

console.log(elementosUnicos(numeros));

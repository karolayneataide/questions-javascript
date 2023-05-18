const elementos = [1, 2, 5, 3, 5, 98, 123, 1];

function ordenarElemento(items) {
  const ordemDecrescente = items.sort((a, b) => {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  });

  return ordemDecrescente;
}
console.log(ordenarElemento(elementos));

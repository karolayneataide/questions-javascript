const elementos1 = [1, 2, 5, 3, 5, 98, 123, 1];
const elementos2 = [29, 17, 88, 45];

function concatenarElemento(a, b) {
  const elementos = a.concat(b);

  return elementos;
}
console.log(concatenarElemento(elementos1, elementos2));

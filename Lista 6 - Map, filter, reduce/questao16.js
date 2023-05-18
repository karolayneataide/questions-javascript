const letras = { a: "a", b: "b", c: "c", d: "d", e: "e" };

function quantidadePropriedade(item) {
  const propriedades = Object.getOwnPropertyNames(item);
  const quantidade = propriedades.length;

  return quantidade;
}

console.log(quantidadePropriedade(letras));

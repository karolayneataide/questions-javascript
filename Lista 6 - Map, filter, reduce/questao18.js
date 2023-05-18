const a = { a: "a", b: "b", c: "c" };
const b = { d: "d", e: "e" };

function novoArray(a, b) {
  const ab = Object.assign(a, b);

  return ab;
}

console.log(novoArray(a, b));

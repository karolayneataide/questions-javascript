const minuscula = ["a", "b", "c", "d", "e"];

let maiuscula;

function tornarMaiscula(items) {
  maiuscula = items.map((item) => item.toUpperCase());

  return maiuscula;
}
console.log(tornarMaiscula(minuscula));

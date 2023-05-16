const nomes = ["Maria", "Natalia", "Ray", "Raquel", "Alícia", "Kamyla", "Josi"];

const ordemNomes = nomes.sort(function (a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
});

console.log(ordemNomes);

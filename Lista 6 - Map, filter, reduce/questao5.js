const pessoas = [
  { id: 1, nome: "Maria", idade: 35 },
  { id: 2, nome: "Natalia", idade: 30 },
  { id: 3, nome: "Ray", idade: 32 },
  { id: 4, nome: "Raquel", idade: 26 },
  { id: 5, nome: "Josi", idade: 45 },
  { id: 6, nome: "Karol", idade: 27 },
  { id: 7, nome: "Davi", idade: 1 },
];

function arrayParaObjeto(items) {
  const objeto = {};

  items.forEach((item) => {
    objeto[item.id] = item;
  });

  return objeto;
}

console.log(arrayParaObjeto(pessoas));

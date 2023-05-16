const pessoas = [
  { nome: "Maria", idade: 35 },
  { nome: "Natalia", idade: 30 },
  { nome: "Ray", idade: 32 },
  { nome: "Raquel", idade: 26 },
  { nome: "Josi", idade: 45 },
  { nome: "Karol", idade: 27 },
  { nome: "Davi", idade: 1 },
];

const idadePar = pessoas.filter((pessoa) => pessoa.idade % 2 === 0);

console.log(idadePar);

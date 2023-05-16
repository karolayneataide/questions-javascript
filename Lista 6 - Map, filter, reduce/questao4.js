const pessoas = [
  { nome: "Maria", idade: 35 },
  { nome: "Natalia", idade: 30 },
  { nome: "Ray", idade: 32 },
  { nome: "Raquel", idade: 26 },
  { nome: "Josi", idade: 45 },
  { nome: "Karol", idade: 27 },
  { nome: "Davi", idade: 1 },
];

function calcularMedia(pessoas) {
  const soma = pessoas.reduce((valorAnterior, pessoa) => {
    return valorAnterior + pessoa.idade;
  }, 0);
  const media = soma / pessoas.length;

  console.log(media);
}

calcularMedia(pessoas);

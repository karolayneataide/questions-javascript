const prompt = require("prompt-sync")();

const data = prompt("digite sua data de nascimento no estilo dd/mm/aaaa: ");

function dataInserida(data) {
  const dia = data.slice(0, 2);
  const mes = parseInt(data.slice(3, 5));
  const ano = data.slice(6, 10);

  let nomeMes;

  switch (mes) {
    case 01:
      nomeMes = "Janeiro";
      break;
    case 02:
      nomeMes = "Janeiro";
      break;
    case 03:
      nomeMes = "Março";
      break;
    case 04:
      nomeMes = "Abril";
      break;
    case 05:
      nomeMes = "Maio";
      break;
    case 06:
      nomeMes = "Junho";
      break;
    case 07:
      nomeMes = "Julho";
      break;
    case 08:
      nomeMes = "Agosto";
      break;
    case 09:
      nomeMes = "Setembro";
      break;
    case 10:
      nomeMes = "Outubro";
      break;
    case 11:
      nomeMes = "Novembro";
      break;
    case 12:
      nomeMes = "Dezembro";
      break;
    default:
      nomeMes = "Número inválido";
      break;
  }

  console.log(`${dia} de ${nomeMes} de ${ano}`);

  return data;
}

dataInserida(data);

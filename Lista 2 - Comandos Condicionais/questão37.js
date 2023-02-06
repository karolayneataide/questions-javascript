const prompt = require("prompt-sync")();

const tempoDeChegada = prompt("Digite a hora de chegada no modelo HH:MM : ");
const tempoDePartida = prompt("Digite a hora de partida no modelo HH:MM : ");

const horaChegada = parseInt(tempoDeChegada.slice(0, 2));
const minutoChegada = parseInt(tempoDeChegada.slice(3, 6));
const horaPartida = parseInt(tempoDePartida.slice(0, 2));
const minutoPartida = parseInt(tempoDePartida.slice(3, 6));

const chegada = horaChegada * 60 + minutoChegada;
const partida = horaPartida * 60 + minutoPartida;

if (chegada < partida) {
  const duracao = partida - chegada;
  if (duracao <= 60) {
    const preco1 = 1;
    return (
      console.log("Preço: ", preco1),
      console.log(duracao),
      console.log(chegada),
      console.log(partida)
    );
  }
  if (60 < duracao && duracao <= 120) {
    const preco2 = 2;
    return (
      console.log("Preço: ", preco2),
      console.log(duracao),
      console.log(chegada),
      console.log(partida)
    );
  }

  if (120 < duracao && duracao <= 180) {
    const preco3 = 2 + 1.4;
    return (
      console.log("Preço: ", preco3),
      console.log(duracao),
      console.log(chegada),
      console.log(partida)
    );
  }
  if (180 < duracao && duracao <= 240) {
    const preco4 = 2 + 1.4 + 1.4;
    return (
      console.log("Preço: ", preco4),
      console.log(duracao),
      console.log(chegada),
      console.log(partida)
    );
  }
  if (duracao > 240) {
    const preco5 = 2 + 1.4 + 1.4 + (duracao / 60 - 5) * 2;
    return (
      console.log("Preço: ", preco5),
      console.log(duracao),
      console.log(chegada),
      console.log(partida)
    );
  }
}
if (partida < chegada) {
  const duracao = partida + 1440 - chegada;
  if (duracao <= 60) {
    const preco6 = 1;
    return (
      console.log("Preço: ", preco6),
      console.log(duracao),
      console.log(chegada),
      console.log(partida)
    );
  }
  if (60 < duracao && duracao <= 120) {
    const preco7 = 2;
    return (
      console.log("Preço: ", preco7),
      console.log(duracao),
      console.log(chegada),
      console.log(partida)
    );
  }

  if (120 < duracao && duracao <= 180) {
    const preco8 = 2 + 1.4;
    return (
      console.log("Preço: ", preco8),
      console.log(duracao),
      console.log(chegada),
      console.log(partida)
    );
  }
  if (180 < duracao && duracao <= 240) {
    const preco9 = 2 + 1.4 + 1.4;
    return (
      console.log("Preço: ", preco9),
      console.log(duracao),
      console.log(chegada),
      console.log(partida)
    );
  }
  if (duracao > 240) {
    const preco10 = 2 + 1.4 + 1.4 + (duracao / 60 - 5) * 2;
    return (
      console.log("Preço: ", preco10),
      console.log(duracao),
      console.log(chegada),
      console.log(partida)
    );
  }
}
if ((partida = chegada)) {
  return console.log("Não será cobrado");
} else {
  console.log("Digite um valor válido");
}

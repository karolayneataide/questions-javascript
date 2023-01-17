const prompt = require("prompt-sync")();

console.log(
  " Leia a idade e o tempo de serviço de um trabalhador e escreva se ele pode ou nao se aposentar. As condições para aposentadoria são • Ter pelo menos 65 anos, • Ou ter trabalhado pelo menos 30 anos, • Ou ter pelo menos 60 anos e trabalhado pelo menos 25 anos."
);

const idade = parseInt(prompt("Digite sua idade: "));
const tempoServico = parseInt(prompt("Digite seu tempo de serviço: "));

if (idade >= 65 || tempoServico >= 30 || (idade >= 60 && tempoServico >= 25)) {
  return console.log("Pode se aposentar");
} else {
  console.log("Ainda não pode se aposentar");
}

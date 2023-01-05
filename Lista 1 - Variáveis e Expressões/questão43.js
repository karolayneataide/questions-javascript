const prompt = require("prompt-sync")();

console.log(
  "Escreva um programa de ajuda para vendedores. A partir de um valor total lido, mostre: • o total a pagar com desconto de 10%;• o valor de cada parcela, no parcelamento de 3× sem juros; • a comissao do vendedor, no caso da venda ser a vista (5% sobre o valor com desconto); • a comissao do vendedor, no caso da venda ser parcelada (5% sobre o valor total)  "
);

const compra = Number(prompt("Digite o valor da compra: "));

const compraComDesconto = compra * 0.9;
const parcela = compra / 3;
const comissaoAVista = compraComDesconto * 0.05;
const comissaoAPrazo = compra * 0.05;

console.log("Valor da compra com desconto: R$ ", compraComDesconto);
console.log("Valor da compra parcelada em 3x: R$ ", parcela);
console.log("Valor da comissão da compra a vista: R$ ", comissaoAVista);
console.log("Valor da comissão a prazo: R$ ", comissaoAPrazo);

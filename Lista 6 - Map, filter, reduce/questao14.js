const numeros = [1, 2, 5, 3, 5, 98, 123, 1];

function estaVazio(numeros) {
  const tamanhoNumeros = numeros.length;

  if (tamanhoNumeros > 0) {
    console.log(
      `Não está vazio, possui a quantidade de elementos: ${tamanhoNumeros}`
    );
  } else {
    console.log(`Vazio`);
  }
}

estaVazio(numeros);

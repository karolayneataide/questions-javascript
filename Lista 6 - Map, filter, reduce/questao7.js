const numeros = [1, 2, 3, 5, 98, 123, 1];

let resultado;

const maioresQue10 = numeros.filter((numero) => {
  if (numero > 10) {
    resultado = true;
    return resultado;
  }
});

console.log(maioresQue10);

let impar = 0;
let valorS = 0;
let numero = 1;

for (let n = 1; n <= 99; n++) {
  if (n % 2 !== 0) {
    impar = n;
    if (numero !== 0) {
      valorS += impar / numero;
    }
  }
  if (n < 50) {
    numero += 1;
  }
  console.log(valorS);
}

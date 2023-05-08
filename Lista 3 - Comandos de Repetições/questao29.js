let valorS = 0;
let numeroCrescente = 0;
let fatorial = 1;

for (let i = 1; i <= 5; i++) {
  numeroCrescente += i;

  for (let j = 2; j <= i; j += 2) {
    fatorial *= j * (j - 1);
  }
  valorS += numeroCrescente / fatorial;
  console.log(`O valor de S é: ${valorS}`);
}

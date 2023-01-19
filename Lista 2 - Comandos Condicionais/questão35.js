const prompt = require("prompt-sync")();

const data = prompt("digite uma data no estilo dd/mm/aaaa: ");

const dia = data.slice(0, 2);
const mes = data.slice(3, 5);
const ano = data.slice(6, 10);

const diaEValido = dia > 0 && dia <= 31;
const mesEValido = mes > 0 && mes <= 12;
const anoEValido = ano > 0 && ano.length === 4;
const eBissexto = (ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0;

const dia30 = dia > 0 && dia < 31;
const mes31 =
  mes == 01 ||
  mes == 03 ||
  mes == 05 ||
  mes == 07 ||
  mes == 08 ||
  mes == 10 ||
  mes == 12;
const mes30 = mes == 04 || mes == 06 || mes == 09 || mes == 11;

const mesFevereiro = mes == 02;
const diaFevereiroBissexto = dia > 0 && dia <= 29;
const diaFevereiro = dia > 0 && dia <= 28;

if (!diaEValido || !mesEValido || !anoEValido) {
  return console.log("Data inválida");
} else {
  if (eBissexto) {
    if (mesEValido) {
      if (mes31) {
        if (diaEValido) {
          return console.log("Data válida");
        } else {
          return console.log("Data inválida");
        }
      }
      if (mes30) {
        if (dia30) {
          return console.log("Data válida");
        } else {
          return console.log("Data inválida");
        }
      }
      if (mesFevereiro) {
        if (diaFevereiroBissexto) {
          return console.log("Data válida");
        } else {
          return console.log("Data inválida");
        }
      }
    } else {
      return console.log("data inválida");
    }
  } else {
    if (mesEValido) {
      if (mes31) {
        if (diaEValido) {
          return console.log("Data válida");
        } else {
          return console.log("Data inválida");
        }
      }
      if (mes30) {
        if (dia30) {
          return console.log("Data válida");
        } else {
          return console.log("Data inválida");
        }
      }
      if (mesFevereiro) {
        if (diaFevereiro) {
          return console.log("Data válida");
        } else {
          return console.log("Data inválida");
        }
      }
    } else {
      return console.log("data inválida");
    }
  }
}

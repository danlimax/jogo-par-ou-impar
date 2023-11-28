"use strict";

let numero = 5;
function parOuImpar() {
  const resto = numero % 2;
  if (resto === 0) {
    console.log(numero + " É par.");
  } else {
    console.log(numero + " É impar.");
  }
}
parOuImpar();

function parOuImparParametros(num) {
  const restoParametro = num % 2;
  console.log("---------");
  restoParametro === 0
    ? console.log(num + " É par.")
    : console.log(num + " É impar.");
}

parOuImparParametros(35);

const arrowParOuImpar = (numArrow) => {
  const restoArrow = numArrow % 2;
  console.log("--------");
  if (restoArrow === 0) {
    return console.log(`${numArrow} é um número par`);
  }
  return console.log(`${numArrow} é um número impar`);
};
arrowParOuImpar(63);

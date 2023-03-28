let numeriDispari = [];


for (let i = 0; i < 6; i++) {
  
  let numero =parseInt(prompt("Inserisci un numero:"));

  if (numero % 2 !== 0) {
    numeriDispari.push(numero);
  }
}

document.writeln(`Numeri dispari inseriti:${numeriDispari}`);

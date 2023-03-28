
let somma = 0;


for (var i = 0; i < 10; i++) {
  
  let numero = parseFloat(prompt("Inserisci un numero:"));

  somma += numero;
}

document.writeln("La somma dei numeri inseriti è: " + somma);
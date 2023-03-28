let parola1 = prompt("Inserisci parola")
let parola2 = prompt("Inserisci parola")

if (parola1.length < parola2.length) {
    
    document.write(parola1 + " " + parola2);
  } else {
    
    document.write(parola2 + " " + parola1);
  }
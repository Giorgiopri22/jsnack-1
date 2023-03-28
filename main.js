let numero1 = prompt("Inserisci il numero");
let numero2 = prompt("Inserisci il numero");

numero1 = parseFloat(numero1)
numero2 = parseFloat(numero2)


if(numero1 > numero2){
    document.writeln('Il numero maggiore è' + numero1)
} else if(numero1 < numero2){
    document.writeln('Il numero maggiore è' + numero2)
} else{
    document.writeln('Il numero è uguale')
    
}
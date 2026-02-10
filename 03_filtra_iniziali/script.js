/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function iniziali (nomi){
    let iniziale=[]
    for(i=0; i<nomi.length; i++){
    if (nomi[i].length === "A") {
            iniziale.push(nomi);
        }

}
return iniziale
}


// Invoca la funzione qui e stampa il risultato in console
let soluzione = iniziali(names)
console.log(soluzione)


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
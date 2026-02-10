/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function iniziali (nomi){
    let iniziale=[]
    for(i=0; i<nomi.length; i++){
    if (nomi[i].length > 0) {
            iniziale.push(nomi[i][0]);
        }

}
return iniziale
}




// Invoca la funzione qui e stampa il risultato in console

let soluzione = iniziali(names)
console.log(soluzione)


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
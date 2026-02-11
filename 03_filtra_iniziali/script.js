/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const lettera = prompt("inserisci la lettera che vuoi ricercare")

// Dichiara la funzione qui.
function filtraLetteraA(nomi,lettera) {
    let nomiConA = [];
    for (let i = 0; i < nomi.length; i++) {
        let nome_analizzato = nomi[i];
        if (nome_analizzato[0] === lettera) {
            nomiConA.push(nome_analizzato);
        }
    }
    return nomiConA
}




// Invoca la funzione qui e stampa il risultato in console
let soluzione = filtraLetteraA(names, lettera)
console.log(soluzione)

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filtraLetteraA(nomi) {
    let nomiConA = [];
    for (let i = 0; i < nomi.length; i++) {
        let nome = nomi[i];
        if (nome[0] === "A") {
            nomiConA.push(nome);
        }
    }
    return nomiConA
}




// Invoca la funzione qui e stampa il risultato in console
let soluzione = filtraLetteraA(names)
console.log(soluzione)

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
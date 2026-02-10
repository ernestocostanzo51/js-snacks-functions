/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function estrazioneVocali (parola){
    let vocali= []
    for(let i=0;i<parola.length;i++){
    if(parola[i] === "a" ||parola[i] === "e" ||parola[i] === "i" ||parola[i] === "o" ||parola[i] === "u")
        vocali.push(parola[i])
}
return vocali
}

let soluzione = estrazioneVocali(word)
console.log(soluzione)

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'javascript': 3 (a, a, i)
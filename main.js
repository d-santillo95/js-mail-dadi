// "Sono in lista?" Chiedi all'utente la sua email controlla che sia nella lista di chi può accedere (ergo: la mail è presente in un array contenente le email "autorizzate") e stampa un messaggio appropriato (sei in lista/non sei in lista)

//creare lista email autorizzate
var lista = ['a@email.com', 'b@email.com', 'c@email.com', 'd@email.com'] ;
//chiedere mail all'utente
var email = prompt('inserisci la tua email');
//controllare se l'utente è nella lista e visualizzare l'esito
var assente = true; //utilizzo questa variabile per uscire dal ciclo for appena trovo che l'utente è autorizzato
for (var i = 0; i < lista.length && assente; i++) {
    if (lista[i] == email) {
        console.log('sei autorizzato');
        assente = false;
    }
}
if (assente) {  //'assente' resta 'true' solo se l'utente non è presente nella lista
    console.log('non sei autorizzato');
}

// "Gioco dei dadi" PC vs. Human: chiedi un numero all'utente tra 1 e 6 (giocata human) e estrai un numero casuale tra 1 e 6 (giocata PC). Chi fa il numero più alto vince!

//creare numero pc e chiedere numero all'utente
var num_pc = (Math.floor(Math.random() * 100) % 6) + 1;
console.log(num_pc);
var num_us = parseInt(prompt('inserisci un numero compreso tra 1 e 6'))
//controllare il numero maggiore e visualizzare l'eesito
if (num_us < 1 || num_us > 6 || isNaN(num_us)) {
    console.log('hai barato')
} else {
    if (num_us < num_pc) {
        console.log('hai perso');
    } else {
        console.log('hai vinto')
    }
}

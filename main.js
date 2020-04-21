// "Sono in lista?" Chiedi all'utente la sua email controlla che sia nella lista di chi può accedere (ergo: la mail è presente in un array contenente le email "autorizzate") e stampa un messaggio appropriato (sei in lista/non sei in lista)

//creare lista email autorizzate
var lista_char = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y','z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lista = [];
var num1 = Math.floor(Math.random() * 10) + 4; //numero elementi presenti nella lista
var num2 = Math.floor(Math.random() * 10) + 1; //lunghezza email_casuale
var email_casuale = '';
for (var i = 0; i < num1; i++) {
    for (var j = 0; j < num2; j++) {
        email_casuale += lista_char[Math.floor(Math.random() * lista_char.length)];
    }
    email_casuale += '@email.com';
    lista.push(email_casuale);
    num2 = Math.floor(Math.random() * 10) + 1; //lunghezza email_casuale
    email_casuale = '';
}
console.log(lista);
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
var num_pc = Math.floor(Math.random() * 6) + 1;
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

/* 
Mail:
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

Gioco dei dadi:
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/
var loginform = document.getElementById("loginform");

const mailiscritti = [ "prova@giocodadi.com" ];

const passiscritti = [ "prova123" ]

let soldatino1 = false

let soldatino2 = false

const login = document.getElementById("login");

//attivazione bottone log in
login.addEventListener("click", function(event) {
  const useremail = document.getElementById('useremail').value;
  const userpass = document.getElementById('userpass').value;
  event.preventDefault();
  console.log(` email utente: ${useremail}`);
  console.log(` pass utente: ${userpass}`);

  //ciclo controllo email soldatino1
  for (let i = 0; i < mailiscritti.length; i++) {

    if( mailiscritti[i] == `${useremail}` ){
        soldatino1 = true
   }
  } 

  //ciclo controllo password soldatino2
  for (let k = 0; k < passiscritti.length; k++) {

    if( passiscritti[k] == `${userpass}` ){
        soldatino2 = true
   }
  } 

  console.log(`email corretta: ${soldatino1}`)
  console.log(`pass corretta: ${soldatino2}`)

  //progressione pagina post login
  if( `${soldatino1}` == "true" && `${soldatino2}` == "true") {

    loginform.classList.add("d-none");

  } else {

    logfailallert.classList.remove("d-none");

  }

});
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

//attivazione bottone log in

const login = document.getElementById("login");

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
    dadic.classList.remove("d-none");

  } else {

    logfailallert.classList.remove("d-none");

  }

});

//attivazione bottone roll

const roll = document.getElementById("roll");

roll.addEventListener("click", function(event) {

   const usernumber = Math.floor(Math.random() * 7);
   const computernumber = Math.floor(Math.random() * 7);

   console.log(` roll utente: ${usernumber}`);
   console.log(` roll pc: ${computernumber}`);

   document.getElementById("userresult").innerHTML =` ${usernumber} `;
   document.getElementById("pcresult").innerHTML =` ${computernumber} `;
   

   // dado user
   if (`${usernumber}` == 1) {
    dadounouser.classList.remove("d-none");
    dadodueuser.classList.add("d-none");
    dadotreuser.classList.add("d-none");
    dadoquattrouser.classList.add("d-none");
    dadocinqueuser.classList.add("d-none");
    dadoseiuser.classList.add("d-none");
   
   } else if (`${usernumber}` == 2) {
    dadounouser.classList.add("d-none");
    dadodueuser.classList.remove("d-none");
    dadotreuser.classList.add("d-none");
    dadoquattrouser.classList.add("d-none");
    dadocinqueuser.classList.add("d-none");
    dadoseiuser.classList.add("d-none");

   } else if (`${usernumber}` == 3) {
    dadounouser.classList.add("d-none");
    dadodueuser.classList.add("d-none");
    dadotreuser.classList.remove("d-none");
    dadoquattrouser.classList.add("d-none");
    dadocinqueuser.classList.add("d-none");
    dadoseiuser.classList.add("d-none");

   } else if (`${usernumber}` == 4) {
    dadounouser.classList.add("d-none");
    dadodueuser.classList.add("d-none");
    dadotreuser.classList.add("d-none");
    dadoquattrouser.classList.remove("d-none");
    dadocinqueuser.classList.add("d-none");
    dadoseiuser.classList.add("d-none");

   } else if (`${usernumber}` == 5) {
    dadounouser.classList.add("d-none");
    dadodueuser.classList.add("d-none");
    dadotreuser.classList.add("d-none");
    dadoquattrouser.classList.add("d-none");
    dadocinqueuser.classList.remove("d-none");
    dadoseiuser.classList.add("d-none");

   } else if (`${usernumber}` == 6) {
    dadounouser.classList.add("d-none");
    dadodueuser.classList.add("d-none");
    dadotreuser.classList.add("d-none");
    dadoquattrouser.classList.add("d-none");
    dadocinqueuser.classList.add("d-none");
    dadoseiuser.classList.remove("d-none");
   } 

   //dado pc
   if (`${computernumber}` == 1) {
    dadounopc.classList.remove("d-none");
    dadoduepc.classList.add("d-none");
    dadotrepc.classList.add("d-none");
    dadoquattropc.classList.add("d-none");
    dadocinquepc.classList.add("d-none");
    dadoseipc.classList.add("d-none");
   
   } else if (`${computernumber}` == 2) {
    dadounopc.classList.add("d-none");
    dadoduepc.classList.remove("d-none");
    dadotrepc.classList.add("d-none");
    dadoquattropc.classList.add("d-none");
    dadocinquepc.classList.add("d-none");
    dadoseipc.classList.add("d-none");
   
   } else if (`${computernumber}` == 3) {
    dadounopc.classList.add("d-none");
    dadoduepc.classList.add("d-none");
    dadotrepc.classList.remove("d-none");
    dadoquattropc.classList.add("d-none");
    dadocinquepc.classList.add("d-none");
    dadoseipc.classList.add("d-none");
   
   } else if (`${computernumber}` == 4) {
    dadounopc.classList.add("d-none");
    dadoduepc.classList.add("d-none");
    dadotrepc.classList.add("d-none");
    dadoquattropc.classList.remove("d-none");
    dadocinquepc.classList.add("d-none");
    dadoseipc.classList.add("d-none");
   
   } else if (`${computernumber}` == 5) {
    dadounopc.classList.add("d-none");
    dadoduepc.classList.add("d-none");
    dadotrepc.classList.add("d-none");
    dadoquattropc.classList.add("d-none");
    dadocinquepc.classList.remove("d-none");
    dadoseipc.classList.add("d-none");
   
   } else if (`${computernumber}` == 6) {
    dadounopc.classList.add("d-none");
    dadoduepc.classList.add("d-none");
    dadotrepc.classList.add("d-none");
    dadoquattropc.classList.add("d-none");
    dadocinquepc.classList.add("d-none");
    dadoseipc.classList.remove("d-none");
   
   }
   
   if (`${usernumber}` > `${computernumber}`){

    winner.classList.remove("d-none");
    loser.classList.add("d-none");

   } else {

    winner.classList.add("d-none");
    loser.classList.remove("d-none");

   }

})


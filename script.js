var parola = prompt('inserisci una parola')
var lettereParola = []

for (var i = 0; i < parola.length; i++) {
  lettereParola.push(parola[i])
}


function palindroma(word) {
  var parolaAlContrario = lettereParola.reverse()
  var lettereParolaAlContrario = ""

  for (var i = 0; i < parolaAlContrario.length; i++) {
    lettereParolaAlContrario += parolaAlContrario[i]
  }
  if (lettereParolaAlContrario === parola) {
    alert( parola + ' è palindroma')
  } else {
    alert( parola + ' non è palindroma')
  }
}

palindroma(parola)


var pariOdispari = prompt('pari o dispari?')
var numeroUtente = parseInt(prompt('scegli un numero tra 1 e 5'))
console.log('il numero dell\'utente è ' + numeroUtente)

function numeroRandom(min, max){
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}
function pari(num){
  if (num % 2 === 0) {
    return true;
  }else{
    return false;
  }
}
var numeroComputer = numeroRandom(1,5)
console.log('il numero del computer è ' + numeroComputer)
var esito;
var somma = numeroUtente + numeroComputer
console.log('la somma è ' + somma)

if (pari(somma) === true) {
  esito = 'pari'
} else {
  esito = 'dispari'
}

if (esito === pariOdispari) {
  alert('you win')
} else {
  alert('you lose')
}
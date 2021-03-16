// un alert espone 5 numeri casuali
var arrayEstratti = randomGeneratore(1,100);

function randomGeneratore(min, max){

  var numeriEstratti = [];//array vuoto metti dentro se no non funzia
  var numeroSostituto;

  while (numeriEstratti.length < 5) {
    var numeriCpu = Math.floor(Math.random() * max) + 1;

     if (numeriEstratti.includes(numeriCpu) == false){
      numeriEstratti.push(numeriCpu);
      }
  }
  return numeriEstratti;
}
alert("Numeri DA INDOVINARE: " + arrayEstratti);

// parte un timer di 30 secondi
var secondi = 5;//metti 30
var numeriUtente;
var arrayUtente = [];

var countDown = setInterval(function () {
  console.log(secondi);
  if (secondi <= 0) {
    clearInterval(countDown);

    var numeriUtente;
    var arrayUtente = [];

    for (var i = 0; i < 5; i++) {
      numeriUtente = parseInt(prompt("inserisci i tuoi numeri"));
      arrayUtente.push(numeriUtente);
      console.log(arrayUtente);}
  }else {
    secondi-= 1;
  }
},1000
);



// dopo 30 secondi abbimao 5 prompt dei nuemri visti

// il software dice quali e quanti numeri sono stati indovinati

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
alert("Numeri DA MEMORIZZARE: " + arrayEstratti);


function trovaInArray(array, elemento) {
  var i = 0;
  trovato = false;
  while (i < array.length) {
    if (array[i] == elemento) {
      return true;
    }
    i++;
  }
  return false;
}

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
    var numeriIndovinati = [];
// dopo 30 secondi abbimao 5 prompt dei nuemri visti
    for (var i = 0; arrayUtente.length< 5; i++) {
      numeriUtente = parseInt(prompt("inserisci i tuoi numeri"));

        if (isNaN(numeriUtente)) {
          alert("inserisci un nuovo numero");
        }else if (arrayUtente.includes(numeriUtente)) {
          alert("inserisci un nuovo numero");
        }
        else {
          arrayUtente.push(numeriUtente);
        }

      var trovato = trovaInArray(arrayEstratti, numeriUtente)

      if (trovato == true) {
          numeriIndovinati.push(numeriUtente);
      }
    }
    console.log(arrayUtente);
    // il software dice quali e quanti numeri sono stati indovinati
    console.log(" Totale numeri indovinati--> " + numeriIndovinati.length + " Numeri corrispondenti--> " + numeriIndovinati );

  }else {
    secondi-= 1;
  }
},1000
);

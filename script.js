 //Chiediamo all'utente i km che vuole percorrere e di selezionare la fascia di età
const inputKmEl = document.querySelector("input#inputKm");
const inputAgeEl = document.querySelector("select#inputAge");
const submitBtn = document.querySelector("button");

submitBtn.addEventListener("click", function() {
   const kmPercorsi = parseFloat(inputKmEl.value);
   const etaSelezionata = parseInt(inputAgeEl.value);
    

    //Prezzo biglietto senza sconto
    let prezzoBiglietto = kmPercorsi * 0.1976;
    console.log(prezzoBiglietto);

    let sconto;
    //Calcolo dello sconto
    //Sconto dello 17.65% per i minorenni
    if (etaSelezionata === 0 ) {
        sconto = prezzoBiglietto * 17.65 / 100;
        prezzoBiglietto -= sconto;
    }
    //Sconto del 53.27% per gli over65
    else if (etaSelezionata === 2 ) {
        sconto = prezzoBiglietto * 53.27 / 100;
        prezzoBiglietto -= sconto;
    }

    console.log(prezzoBiglietto);
    document.getElementById("output").innerHTML = "Il prezzo del biglietto è " + prezzoBiglietto.toFixed(2) + "€";
})









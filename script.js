const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", function() {
    //Chiediamo all'utente i km che vuole percorrere e di selezionare la fascia di età
    const inputKm = document.getElementById("inputKm").value;
    const inputAge = document.getElementById("inputAge").value;

    //Prezzo biglietto senza sconto
    const prezzoBiglietto = inputKm * 0.1976;
    console.log(prezzoBiglietto);

    let sconto;
    //Calcolo dello sconto
    //Sconto dello 17.65% per i minorenni
    if (inputAge == "minorenne") {
        sconto = prezzoBiglietto * 17.65 / 100;
        prezzoBiglietto -= sconto;
    }
    //Sconto del 53.27% per gli over65
    else if (inputAge == "over65") {
        sconto = prezzoBiglietto * 53.27 / 100;
        prezzoBiglietto -= sconto;
    }

    console.log (prezzoBiglietto);
    document.getElementById("output").innerHTML = "Il prezzo del biglietto è " + prezzoBiglietto + "€";
})

//document.getElementById("output").innerHTML = "Il prezzo del biglietto è " + prezzoBiglietto + "€";








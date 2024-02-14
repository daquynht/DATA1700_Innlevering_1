//Strenger for utskrift av billett
let utMeldingFornavn = "";
let utMeldingEtternavn = "";
let utMeldingEpost = "";
let utMeldingNummer = "";

//array for billetter
let billetter = [];

//funksjon for input validering
function inputValidering (){

    document.getElementById("fornavnValideringsmelding").innerHTML = "";
    document.getElementById("etternavnValideringsmelding").innerHTML = "";
    document.getElementById("epostValideringsmelding").innerHTML = "";
    document.getElementById("nummerValideringsmelding").innerHTML = "";

    //variabler for input og regex setninger som skal brukes til validering
    let fornavnInput = document.getElementById('fornavn').value
    let etternavnInput = document.getElementById('etternavn').value
    let epostInput = document.getElementById('epost').value
    let nummerInput = document.getElementById('nummer').value

    const regexNavn = /^[a-zA-Z]+$/;
    const regexEpost = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    const regexNummer = /^((0047)?|(\+47)?)[4|9]\d{7}$/

    if (regexNavn.test(fornavnInput)) {
        utMeldingFornavn = document.getElementById('fornavn').value;
    } else {
        utMeldingFornavn = "feil";
        document.getElementById("fornavnValideringsmelding").innerHTML = "Skriv inn et fornavn!";
    }

    if (regexNavn.test(etternavnInput)) {
        utMeldingEtternavn = document.getElementById('etternavn').value;
    } else {
        utMeldingEtternavn = "feil";
        document.getElementById("etternavnValideringsmelding").innerHTML = "Skriv inn et etternavn!";
    }

    if (regexEpost.test(epostInput)) {
        utMeldingEpost = document.getElementById("epost").value;
    } else {
        utMeldingEpost = 'feil';
        document.getElementById("epostValideringsmelding").innerHTML = "Skriv inn en gyldig epost adresse!"
    }

    if (regexNummer.test(nummerInput)) {
        utMeldingNummer = document.getElementById("nummer").value;
    } else {
        utMeldingNummer = "feil";
        document.getElementById("nummerValideringsmelding").innerHTML = "Skriv inn et telefonnummer!"
    }
}

function opprettBillett() {
    let outputString = "";

    //variabler i billett objekt blir opprettet med en verdi
    let billett = {
        //variabler uten input validering
        film : document.getElementById("velgFilm").value,
        antall : document.getElementById("antallPersoner").value,
        //variabler med input validering
        fornavn : utMeldingFornavn,
        etternavn : utMeldingEtternavn,
        epost : utMeldingEpost,
        nummer : utMeldingNummer
    };

    //billett blir pushet inn i array hvis alle valideringene har blitt godkjent
    if (utMeldingFornavn !== "feil" && utMeldingEtternavn !== "feil" && utMeldingEpost !== "feil" && utMeldingNummer !== "feil") {
        billetter.push(billett)
    }

    //her printes arrayet ut i en for løkke ved hjelp av outputString
    for (let i = 0; i < billetter.length; i++) {
        outputString +=
            "Film: " + billetter[i].film + "<br>" +
            "Antall " + billetter[i].antall + "<br>" +
            "Fornavn: " + billetter[i].fornavn + "<br>" +
            "Etternavn: " + billetter[i].etternavn + "<br>" +
            "Epost: " + billetter[i].epost + "<br>" +
            "TelefonNr: " + billetter[i].nummer + "<br>";
    }
    //outputString blir plassert i div-en med id output
    document.getElementById("output").innerHTML = outputString;

    //her resetter jeg input boksene ved hjelp av getElementsByName
    let inputBokser = document.getElementsByName('input');
    for (let i = 0; i < inputBokser.length; i++) {
        inputBokser[i].value = '';
    }
}

//funksjon kjopBillettKnap er koblet til kjopBillett knap i HTML
//brukes for å kalle 2 funksjoner med samme knapp
function kjopBillettKnap() {
    inputValidering();
    opprettBillett();
}

function slettBilletter() {
    //den eksisterende variabelen billetter får et nytt tomt array
    billetter = [];
    //div-en med id = output blir rensket for tekst
    document.getElementById('output').innerHTML = '';
    //Sletter valideringsfeilmeldinger
    document.getElementById("fornavnValideringsmelding").innerHTML = "";
    document.getElementById("etternavnValideringsmelding").innerHTML = "";
    document.getElementById("epostValideringsmelding").innerHTML = "";
    document.getElementById("nummerValideringsmelding").innerHTML = "";


}
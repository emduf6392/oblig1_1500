let billetter = [];
function nyBestilling() {
    let film = document.getElementById("vfilm").value;
    let antall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fnavn").value;
    let etternavn = document.getElementById("enavn").value;
    let telefonnummer = document.getElementById("telnr").value;
    let epost = document.getElementById("epost").value;

    let erRiktig = true;
    if (!sjekkFilm(film)) {
        visError("errorFilm", "Du må velge en film");
        erRiktig = false;
    } else {
        skjulError("errorFilm")
    }
    if (!sjekkAntall(antall)) {
        visError("errorAntall", "Velg antall billetter");
        erRiktig = false;
    } else {
        skjulError("errorAntall")
    }
    if (!sjekkFornavn(fornavn)) {
        visError("errorFornavn", "Skriv inn fornavn");
        erRiktig = false;
    } else {
        skjulError("errorFornavn")
    }
    if (!sjekkEtternavn(etternavn)) {
        visError("errorEtternavn", "Skriv inn etternavn");
        erRiktig = false;
    } else {
        skjulError("errorEtternavn")
    }
    if (!sjekkTelefonnummer(telefonnummer)) {
        visError("errorTelefonnummer", "Skriv inn gyldig telefonnummer");
        erRiktig = false;
    } else {
        skjulError("errorTelefonnummer")
    }
    if (!sjekkEpost(epost)) {
        visError("errorEpost", "Skriv inn gyldig epost");
        erRiktig = false;
    } else {
        skjulError("errorEpost")
    }

    const billett = {
        film: film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefonnummer: telefonnummer,
        epost: epost,
    };

    if (erRiktig === true) {
        billetter.push(billett);
        resetInput();

        console.log("Ny bestilling registrert");
        visBilletter();
    }
}
function resetInput(){
    const input = document.querySelectorAll('input[type="number"], input[type="text"]');
    input.forEach(function (input) {
        input.value = "";
    });
}
function visBilletter() {
    let ut = "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnummer</th><th>E-post</th>" +
        "</tr>";
    for (let b of billetter) {
        ut += "<tr>";
        ut += "<td>" + b.film + "</td><td>" + b.antall + "</td><td>" + b.fornavn + "</td><td>" + b.etternavn + "</td><td>" + b.telefonnummer + "</td><td>" + b.epost + "</td>";
        ut += "</tr>";
    }
    document.getElementById("mineBilletter").innerHTML=ut;
}
function sjekkFilm(film) { //denne fikk jeg ikke til å dukke opp da "label" velg film her er "valgt"
    let valgtFilm = film.value;
    return film !== "";
}
function sjekkAntall(antall) {
    return Number.isInteger(Number(antall)) && Number(antall) > 0;
}
function sjekkFornavn(fornavn) {
    return fornavn.trim() !== "";
}
function sjekkEtternavn(etternavn) {
    return etternavn.trim() !== "";
}
function sjekkTelefonnummer(telefonnummer) {
    return Number.isInteger(Number(telefonnummer)) && telefonnummer.toString().length === 8;
}
function sjekkEpost(epost) {
    let eposttegn = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //tatt fra chatGPT
    return eposttegn.test(epost);
}
function visError(elementId, message) {
    let errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = "block";
}

function skjulError(elementId) {
    let errorElement = document.getElementById(elementId);
    errorElement.textContent = "";
    errorElement.style.display = "none";
}

function slettAlle(){
    billetter = [];
    console.log("Alle billetter er slettet");
    document.getElementById("mineBilletter").innerHTML="";
}
let billetter = [];
function nyBestilling() {
    let film = document.getElementById("vfilm").value;
    let antall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fnavn").value;
    let etternavn = document.getElementById("enavn").value;
    let telefonnummer = document.getElementById("telnr").value;
    let epost = document.getElementById("epost").value;
}

let erRiktig = true;
if (!sjekkFilm(film)) {
    visError("errorFilm", "Du må velge en film");
    erRiktig = false;
}
else {
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
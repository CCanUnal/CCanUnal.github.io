const setup = () => {
    let buttonAn = document.getElementById('btnAn');
    buttonAn.addEventListener('click', telAnInTekst);
}

const telAnIndexOf = (tekst, zoekwoord) => {
    let index = 0;
    let count = 0;
    while ((index = tekst.indexOf(zoekwoord, index)) !== -1) {
        count++;
        index++;
    }
    return count;
}

const telAnInTekst = () => {
    let tekst = document.getElementById('tekstAn').value.toLowerCase();
    let zoekwoord = "an";
    let aantal = telAnIndexOf(tekst, zoekwoord);
    console.log("An komt " + aantal + " keer voor in deze tekst.");
}

window.addEventListener("load", setup);
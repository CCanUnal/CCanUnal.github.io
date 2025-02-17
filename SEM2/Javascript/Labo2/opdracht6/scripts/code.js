const setup = () => {
    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);
}
const kopieer = () => {
    let txtInput = document.getElementById("txtInput");
    let tekst = txtInput.value;
    let gg = document.getElementById("txtOutput");
    gg.innerHTML = tekst;
}
window.addEventListener("load", setup);
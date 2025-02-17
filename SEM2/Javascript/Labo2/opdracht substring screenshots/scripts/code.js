const setup = () => {
    let btnSubstring = document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", knopje)
}
    const knopje = () =>
    {
        let input = txt.value;
        let sub1 = nrInput.value;
        let sub2 = nInput.value;
        let tekst = document.getElementById("txtOutput");
        tekst.innerHTML = input.substring(sub1, sub2);
    }
window.addEventListener("load", setup);
const setup = () => {
    let buttonTransform = document.getElementById('btnTransform');
    buttonTransform.addEventListener('click', stringWijzigen);
}

const maakMetSpaties = (inputText) => {
    let result = "";
    for (let i = 0; i < inputText.length; i++) {
        if(inputText[i] !== " ") {
            result += inputText[i] + " ";
        }
    }
    return result.trim();
}

const stringWijzigen = () => {
    let tekst = document.getElementById('tekstVeld').value;
    let resultaat = maakMetSpaties(tekst);
    console.log(resultaat);
}

window.addEventListener("load", setup);
const setup = () => {
    let familieleden = ['lid1', 'lid2', 'lid3', 'lid4', 'lid5'];
    console.log(familieleden.length);
    console.log(familieleden[0], familieleden[2], familieleden[4]);
    console.log(familieleden);
}
const voegNaamToe = (familieleden) => {
    let naam = prompt("Voeg een extra naam toe")
    familieleden.push(naam);
}
window.addEventListener("load", setup);
const setup = () => {
    let breedte = prompt("Geef de breedte.");
    let hoogte = prompt("Geef de hoogte.");
    let even

    console.log(berekenOppverlakte(breedte, hoogte) + " m²");

    txthoogte.innerHTML = "Hoogte: "+hoogte;
    txtbreedte.innerHTML = "Breedte "+breedte;
    txtoppervlakte.innerHTML = "Oppervlakte: "+berekenOppverlakte(breedte,hoogte) + " m²";



    let getal = prompt("Geef een getal.");
    if(isEven(parseInt(getal))) {
        console.log("Het getal is even.");
        even="even";
    } else {
        console.log("Het getal is oneven.");
        even="oneven";
    }
    txteven.innerHTML = "Het is "+even;
}

//een methode met 2 parameters die gegeven worden
const berekenOppverlakte = (breedte, hoogte) => {
    return breedte * hoogte;
}

const isEven = (getal) => {
    return getal % 2 === 0;
}
window.addEventListener("load", setup);
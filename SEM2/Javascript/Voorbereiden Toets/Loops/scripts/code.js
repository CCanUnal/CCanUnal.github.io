const setup = () => {
    for (let i = 0; i < 10; i++) {
        console.log(i+1);
    }

    let getal = prompt("Geef een getal.");
    let i = 1;
    while(i<=parseInt(getal)){
        console.log(i);
        i++;
    }

    let wachtwoord = prompt("Geef een wachtwoord.");
    while(wachtwoord !== "1"){
        wachtwoord = prompt("Geef een wachtwoord.");

    }

}
window.addEventListener("load", setup);
let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {

    let lstPersonen = document.getElementById("lstPersonen");
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();

    // indien ok, bewaar de ingegeven data.
    let elements = document.getElementsByClassName("invalid");
    if(elements.length === 0){
        //Alles in orde, we mogen bewaren
        vulPersoonOpBasisVanUserInterface()
    }
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};











// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
    let lstPersonen = document.getElementById("lstPersonen");
    let txtVoornaam = document.getElementById("txtVoornaam");
    let txtFamillienaam = document.getElementById("txtFamillienaam");
    let txtGeboortedatum = document.getElementById("txtGeboortedatum");
    let txtEmail= document.getElementById("txtEmail");
    let txtAantalkinderen = document.getElementById("txtAantalkinderen");

    //Alle velden leegmaken
    txtVoornaam.value = "";
    txtFamillienaam.value="";
    txtGeboortedatum.value = "";
    txtEmail.value = "";
    txtAantalkinderen.value="";

        //Zorgen dat er geen selectie is in de lijst
        lstPersonen.selectedIndex = -1;

    clearAllErrors();
};


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);

































lst personen.select















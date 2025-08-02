// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht

let personen = [];

//Properties van persoon object instellen
const vulPersoonOpBasisVanUserInterface = (persoon) => {
    let txtVoornaam = document.getElementById("txtVoornaam");
    persoon.voornaam = txtVoornaam.value.trim();

    let txtFamilienaam = document.getElementById("txtFamilienaam");
    persoon.familienaam = txtFamilienaam.value.trim();

    let txtGeboortedatum = document.getElementById("txtGeboorteDatum");
    persoon.geboortedatum = new Date(txtGeboortedatum.value.trim()); //ANDERS WERKT HET NIET !!!!

    let txtEmail = document.getElementById("txtEmail")
    persoon.email= txtEmail.value.trim();

    let txtAantalkinderen = document.getElementById("txtAantalKinderen")
    persoon.aantalkinderen = parseInt(txtAantalkinderen.value.trim());
};


//Inputvelden invullen op basis van properties van persoon
const vulUserInterfaceOpBasisVanPersoon = (persoon) => {

    let txtVoornaam = document.getElementById("txtVoornaam");
    txtVoornaam.value = persoon.voornaam;

    let txtFamilienaam = document.getElementById("txtFamilienaam");
    txtFamilienaam.value = persoon.familienaam;

    let txtGeboortedatum = document.getElementById("txtGeboortedatum");
    txtGeboortedatum.value = persoon.geboorteDatum

    let txtEmail = document.getElementById("txtEmmail")
    txtEmail.value =persoon.email;

    let txtAantalkinderen = document.getElementById("txtAantalkinderen")
    txtAantalkinderen.value = persoon.aantalkinderen;



};

//Vragen aan chatGPT
//Voeg de persoon toe aan de lijst in de user interface & selecteer die persoon in de lijst
const voegPersoonToeAanLijstInUserInterface = (persoon) => {

    let lstPersonen = document.getElementById("lstPersonen");
    let option = document.createElement("option");

    option.innerHTML = persoon.voornaam + " " + persoon.familienaam;
    lstPersonen.appendChild(option);
    lstPersonen.selectedIndex = personen.length - 1;

};



//update de voorstelling van de persoon in de usr interface
const updatePersoonInLijstInUserInterface = (persoon) => {

    let lstPersonen = document.getElementById("lstPersonen");
    let option = lstPersonen.options[lstPersonen.selectedIndex];

    option.innerHTML= persoon.voornaam + " " + persoon.familienaam;
};



//Event listener (btnBewaar click)
//Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {

    let lstPersonen = document.getElementById("lstPersonen")

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();

    //Na valideer(), kijk je of je fouten hebt
    let elements = document.getElementsByClassName("invalid");
    if(elements.length === 0){

        // indien ok, bewaar de ingegeven data.
        let persoon = {};

        if(lstPersonen.selectedIndex === -1) {

            // een nieuw aangemaakte persoon voegen we toe
            vulPersoonOpBasisVanUserInterface(persoon);
            personen.push(persoon); //Toevoegen aan interne lijst
            voegPersoonToeAanLijstInUserInterface(persoon);

        } else{
            // een bestaande persoon in de lijst passen we aan
            persoon = personen[lstPersonen.selectedIndex];
            vulPersoonOpBasisVanUserInterface(persoon);
            updatePersoonInLijstInUserInterface(persoon);

        }
    }
};


// Event listener (btnNieuw click)
// Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
const bewerkNieuwePersoon = () => {

    //Alle velden initialiseren
    let lstPersonen = document.getElementById("lstPersonen");
    let txtVoornaam = document.getElementById("txtVoornaam");
    let txtFamilienaam = document.getElementById("txtFamilienaam");
    let txtGeboortedatum = document.getElementById("txtGeboorteDatum");
    let txtEmail = document.getElementById("txtEmail");
    let txtAantalkinderen = document.getElementById("txtAantalKinderen");

    //Alle velden leegmaken
    txtVoornaam.value = "";
    txtFamilienaam.value="";
    txtGeboortedatum.value="";
    txtEmail.value="";
    txtAantalkinderen.value="";

    //Zorgen dat er geen selectie meer is in de userinterface
    lstPersonen.selectedIndex = -1;

    //Elke error weghalen
    clearAllErrors()
};



//EventListener, bij change van lstPersonen
const bewerkGeselecteerdePersoon = (e) =>{

    let index = e.target.selectedIndex;
    let persoon = personen[index];

    vulUserInterfaceOpBasisVanPersoon(persoon);
    clearAllErrors();
}



// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", bewerkGeselecteerdePersoon)

    vulMetDemoData();

};



const vulMetDemoData = () => {
    let jan = {
        voornaam: 'Jan',
        familienaam: 'Janssens',
        geboorteDatum: new Date('2010-10-10'),
        email: 'jan@example.com',
        aantalKinderen: 0
    };
    let mieke = {
        voornaam: 'Mieke',
        familienaam: 'Mickelsen',
        geboorteDatum: new Date('1980-01-01'),
        email: 'mieke@example.com',
        aantalKinderen: 1
    };
    let piet = {
        voornaam: 'Piet',
        familienaam: 'Pieters',
        geboorteDatum: new Date('1970-12-31'),
        email: 'piet@example.com',
        aantalKinderen: 2
    };

    personen.push(jan);
    voegPersoonToeAanLijstInUserInterface(jan);

    personen.push(mieke);
    voegPersoonToeAanLijstInUserInterface(mieke);

    personen.push(piet);
    voegPersoonToeAanLijstInUserInterface(piet);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.selectedIndex = -1; // geen selectie
};


window.addEventListener("load", setup);
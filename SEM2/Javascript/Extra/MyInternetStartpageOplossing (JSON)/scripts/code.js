const setup = () => {
    let btnGo = document.getElementById("btnGo");
    btnGo.addEventListener("click", voerCommandoUit);

    //Haalt zoekgeschiedenis op als een array van opdrachten, als het leeg is krijg je NULL
    let lsHistory = JSON.parse(localStorage.getItem("vives.be.history"));

    //Controle of er een geschiedenis in zit.
    // Zo ja, ga door elke item in geschiedenis en roep een card op voor elk.
    if(lsHistory){

        for(let i = 0; i<lsHistory.length; i++){

            createCardAndAppend(lsHistory[i].title, lsHistory[i].text, lsHistory[i].url);
        }
    }
};

const voerCommandoUit = () => {
    let txtCommandoInput = document.getElementById("commandoInput");
    let command = txtCommandoInput.value;


    let regex = command.match("\/[a-z]{1} [a-z]*");
    if(regex != null){
        let commandPrefix = command.substr(0,2);
        if(commandPrefix === '/g'){
            google(command.substr(3)); //Vanaf 3e dus na spatie word het zoekopddracht doorgegeven naar nodige site
        }
        else if (commandPrefix === '/t') {
            twitter(command.substr(3));
        }
        else if(commandPrefix === '/y'){
            youtube(command.substr(3));
        }
        else if(commandPrefix === '/i'){
            instagram(command.substr(3));
        }
        else {
            alert("Unknown command prefix");
        }
        txtCommandoInput.value = "";
    }
    else {
        alert("Invalid command");
    }
};




const google = (commandoSuffix) => {
    let url = "https://www.google.com/search?q="+commandoSuffix; //Voegt de zoekopdracht toe aan WWW...
    window.open(url, '_blank'); //opent de link in een nieuwe pagina
    createCardAndAppend("Google", commandoSuffix, url);
    saveLocalStorage("Google", commandoSuffix, url);
};

const twitter = (commandoSuffix) => {
    let url = "https://twitter.com/hashtag/"+commandoSuffix;
    window.open(url, '_blank');
    createCardAndAppend("Twitter", commandoSuffix, url);
    saveLocalStorage("Twitter", commandoSuffix, url);
};

const youtube = (commandoSuffix) => {
    let url = "https://www.youtube.com/results?search_query="+commandoSuffix;
    window.open(url, '_blank');
    createCardAndAppend("Youtube", commandoSuffix, url);
    saveLocalStorage("Youtube", commandoSuffix, url);
};

const instagram = (commandoSuffix) => {
    let url = "https://www.instagram.com/explore/tags/"+commandoSuffix;
    window.open(url, '_blank');
    createCardAndAppend("Instagram", commandoSuffix, url);
    saveLocalStorage("Instagram", commandoSuffix, url);
};






const createElementWithClassName = (element, className) => { //Maak een HTML element met een klasnaam die je zelf geeft bij het aanroepen
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;
};

const createElementWithClassNameAndText = (element, className, text) => {
    let e = createElementWithClassName(element, className);
    e.appendChild(document.createTextNode(text));
    return e;
};

const createLinkButton = (url) => {
    let linkGo = document.createElement("a"); // maakt een a element aan (a href)
    linkGo.setAttribute("href", url); //voegt href aan met url "url"
    linkGo.setAttribute("target", "_blank"); //opent url in appart pagina
    linkGo.setAttribute("class", "btn btn-primary"); //opmaak volgens bootstrap
    linkGo.appendChild(document.createTextNode("Go!")); // met als tekst Go!
    return linkGo;// geeft al dat hierboven staat terug
};

const saveLocalStorage = (title, commandoSuffix, url) => {
    let historyObject = {
        title: title,
        text: commandoSuffix,
        url: url
    };

    let lsHistory = JSON.parse(localStorage.getItem("vives.be.history"));
    if(!lsHistory){
        lsHistory = [historyObject];
    }
    else {
        lsHistory.push(historyObject);
    }

    localStorage.setItem("vives.be.history", JSON.stringify(lsHistory));
};

const createCardAndAppend = (title, commandoSuffix, url) => {
    let col4 = createElementWithClassName("div","col-4");
    let card = createElementWithClassName("div","card");
    card.classList.add(title.toLowerCase()+"-card");
    let cardBody = createElementWithClassName("div","card-body");
    let cardTitle = createElementWithClassNameAndText("h5", "card-title", title);
    let cardText = createElementWithClassNameAndText("p", "card-text", commandoSuffix);

    let linkGo = createLinkButton(url);
    linkGo.classList.add(title.toLowerCase()+"-button");

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(linkGo);
    card.appendChild(cardBody);
    col4.appendChild(card);

    let row = document.querySelector("#resultContainer > .row");
    row.appendChild(col4);
};


window.addEventListener("load", setup);
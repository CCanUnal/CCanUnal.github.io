const setup = () => {
    let btnTry = document.getElementById("btnTry");

    // Event-based programming
    btnTry.addEventListener("mouseover", mouseHover);
    btnTry.addEventListener("click", onClick);
    btnTry.addEventListener("mouseout", mouseOut);

    // eventListeners CSS
    document.getElementById("btnWithoutBullets")
        .addEventListener("click", withoutBullets);

    document.getElementById("btnWithBullets")
        .addEventListener("click", withBullets);

    //eventListeners difference between "textContent" and "innerHTML"

    document.getElementById("btnContent")
        .addEventListener("click", changeContent);


}

// mouseHoverFunction
const mouseHover = () => {
    document.getElementById("event").innerHTML += "Mouse Hovered!<br>";

}

// onClickFunction
const onClick = () => {
    document.getElementById("event").innerHTML += "Mouse Clicked!<br>";
}

// mouseOutFunction

const mouseOut = () => {
    document.getElementById("event").innerHTML += "Mouse Out!<br>";
}

//noBulletsFunction
const withoutBullets = () => {

    //Als getElementS -> let = array !!!
    let listItems = document.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++){

        // 1e manier
        //listItems[i].style.listStyle = "none";
        //listItems[i].style.backgroundColor = "red";

        //  2e manier
        //listItems[i].className= "ListItemStyleNone colorRed";

        //  3e manier
        listItems[i].classList.remove("listItemsStyleDisc");
        listItems[i].classList.add("colorRed");

    }
}

//withBulletsFunction
const withBullets = () => {

    //Als getElementS -> let = array !!!
    let listItems = document.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++){
        //  1e manier
        //listItems[i].style.listStyle = "circle";
        //listItems[i].style.backgroundColor = "white";

        //  2e manier
        //listItems[i].className= "ListItemStyleDisc colorWhite";

        //  3e manier
        listItems[i].classList.add("listItemsStyleDisc");
        listItems[i].classList.add("colorWhite");
    }

    //iets Anders
    // difference between "textContent" and "innerHTML"
    const changeContent = () => {
        document.getElementById("textContent")
            .textContent ="<a href='https://www.vives.be'>VIVES</a>";
        document.getElementById("innerHTML")
            .innerHTML ="<a href='https://www.vives.be'>VIVES</a>";
    }


}



window.addEventListener("load", setup);


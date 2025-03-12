const setup = () => {

    let btnSend=document.getElementById('btnSend');
    btnSend.addEventListener('click', trigrameer);

}

const trigrameer = () => {
    lblTrigram.innerHTML="";
    console.log("---------- CLEARED ----------")
    let woord = document.getElementById('txtWoord');
    let i;

    console.log("woord: "+woord.value);
    console.log("Lengte woord: "+ woord.value.length);

    for (i = 0; i < woord.value.length-2; i++) {
        let metDrie =woord.value.substring(i, i+3);



            lblTrigram.innerHTML+="<li>"+metDrie+"</li>";
            console.log("   - "+metDrie);
        }


    console.log("");
    console.log("");
}


window.addEventListener("load", setup);

//Bij het laden
const setup = () => {

    let lblCursus=document.getElementById("lblCursus");
    lblCursus.addEventListener("click",change);

    let btnSend=document.getElementById("btnSend");
    document.getElementById('btnSend').addEventListener('click',show);
}


//Gebeurtenissen
//Gebeurtenis Change (zie lblCursus)
const change = () => {
    let lblCursus=document.getElementById("lblCursus");
    lblCursus.className="cursus";
}

//Gebeurtenis show (zie btnSend)
const show = () => {
    let txtName=document.getElementById("txtName");

    if (txtName.value!==""){
        alert("Jouw naam is: "+txtName.value);

        console.log("Jouw naam is " + txtName.value);
    }else{
        alert("Gelieve naam invullen.");
    }
}






window.addEventListener("load", setup);
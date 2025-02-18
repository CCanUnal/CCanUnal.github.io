const setup = () => {

    //Maakt een array pBelangrijk aan met inhoud: alle elementen die class belangrijk hebben
    let pBelangrijk = document.getElementsByClassName('belangrijk');

    //Loopt over alle elementen uit array en voegt aan elk van hun een klasse opvallend
    for(let i = 0; i < pBelangrijk.length; i++) {
        pBelangrijk[i].className+=" opvallend";
    }
}

window.addEventListener("load", setup);
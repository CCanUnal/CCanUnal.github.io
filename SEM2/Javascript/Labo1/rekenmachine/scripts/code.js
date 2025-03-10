const setup = () => {
    let btnOptellen = document.getElementById('btnOptellen');
    let btnAftrekken = document.getElementById('btnAftrekken');
    let btnVermenigvuldigen = document.getElementById('btnMaal');
    let btnDelen = document.getElementById('btnDelen');

    btnOptellen.addEventListener('click', optellen);
    btnAftrekken.addEventListener('click', aftrekken);
    btnVermenigvuldigen.addEventListener('click', vermenigvuldigen);
    btnDelen.addEventListener('click', delen);

}

const optellen= () =>{
    let links=document.getElementById("txtLinks").value;
    let rechts=document.getElementById("txtRechts").value;
    let txtAntwoord = document.getElementById("txtantwoord");

    console.log(links);
    console.log(rechts);

    let resultaat = parseInt(links)+ parseInt(rechts);
    txtAntwoord.innerHTML = resultaat;

    alert("Antwoord is " + resultaat);
}

const aftrekken= () =>{
    let links=document.getElementById("txtLinks").value;
    let rechts=document.getElementById("txtRechts").value;
    let txtAntwoord = document.getElementById("txtantwoord");

    console.log(links);
    console.log(rechts);

    let resultaat = parseInt(links)- parseInt(rechts);
    txtAntwoord.innerHTML = resultaat;

    alert("Antwoord is " + resultaat);
}

const vermenigvuldigen = () =>{
    let links=document.getElementById("txtLinks").value;
    let rechts=document.getElementById("txtRechts").value;
    let txtAntwoord = document.getElementById("txtantwoord");

    console.log(links);
    console.log(rechts);

    let resultaat = parseInt(links)* parseInt(rechts);
    txtAntwoord.innerHTML = resultaat;

    alert("Antwoord is " + resultaat);

}

const delen= () =>{
    let links=document.getElementById("txtLinks").value;
    let rechts=document.getElementById("txtRechts").value;
    let txtAntwoord = document.getElementById("txtantwoord");

    console.log(links);
    console.log(rechts);

    let resultaat = parseInt(links)/ parseInt(rechts);
    txtAntwoord.innerHTML = resultaat;

    alert("Antwoord is " + resultaat);
}
window.addEventListener("load", setup);
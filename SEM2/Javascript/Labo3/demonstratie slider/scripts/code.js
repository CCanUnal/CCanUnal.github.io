const setup = () => {
	let colorDemos=document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");

	for (let i = 0; i < sliders.length; i++) {
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}

update();

}

const update = () => {

	let red=document.getElementById("sldRed").value
	let green=document.getElementById("sldGreen").value
	let blue=document.getElementById("sldBlue").value

	document.getElementById("lblRed").innerHTML=red;
	document.getElementById("lblGreen").innerHTML=green;
	document.getElementById("lblBlue").innerHTML=blue;


	let body=document.getElementById("body");
	body.style.backgroundColor="rgb("+red+", "+green+", "+blue+")";


}

// dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.
window.addEventListener("load", setup);
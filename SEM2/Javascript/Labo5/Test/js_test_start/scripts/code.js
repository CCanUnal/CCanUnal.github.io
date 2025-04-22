const setup = () => {
	Opties();
	document.getElementById('metOfZonderEi').addEventListener('change', Opties);
	document.getElementById('txtInput').addEventListener('input',letterTellen);
}

let text = document.getElementById('note');
const Opties = () => {
	let metOfZonderEi = document.getElementById('metOfZonderEi').value;
	let foto = document.getElementById('img');
	let optiesMetOfZonderEi = metOfZonderEi.toLowerCase();
	let note = document.getElementById('note');

	if (metOfZonderEi === "---KIES---") {
		foto.className = 'hidden';
		console.log(metOfZonderEi);
	} else if (metOfZonderEi === "met een ei") {
		foto.className = 'with-egg';
		note.innerHTML = 'Hierboven, een kip ' + optiesMetOfZonderEi;
		console.log(metOfZonderEi);
	} else if (metOfZonderEi === "zonder een ei") {
		foto.className = '';
		note.innerHTML = 'Hierboven, een kip ' + optiesMetOfZonderEi;
		console.log(metOfZonderEi);
	}
}
function letterTellen() {
	let letter = document.getElementById('txtInput').value.toLowerCase();
	let textContent = document.getElementById('note').innerText.toLowerCase();
	let aantal = 0;

	for (let i = 0; i < textContent.length; i++) {
		if (textContent[i] === letter) {
			aantal++;
			console.log("aantal: "+ i);
		}
	}
	text.innerHTML += "<br> Letter \"" + letter + "\" komt " + aantal.toString() + " keer voor in bovenstaande zin";
}
window.addEventListener("load", setup);
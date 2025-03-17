const setup = () => {
	let button = document.getElementById("btnToon");
	button.addEventListener('click', toonResultaat)
}

let button = document.getElementById("btnToon");
const toonResultaat = () => {
	getIsRoker();
	getMoedertaal();
	getBuurland();
	getBestelling()
}

const getIsRoker = () => {
	let isRoker = document.getElementById('chkIsRoker');
	if(isRoker.checked){
		console.log("is een roker");
	} else {
		console.log("is geen roker");
	}
}
const getMoedertaal = () => {
	let isNederlands = document.getElementById('rbtMoedertaalNL');
	let isFrans = document.getElementById('rbtMoedertaalFR');
	let isEngels = document.getElementById('rbtMoedertaalEN');
	if(isNederlands.checked){
		console.log("moedertaal is nederlands");
	} else if(isFrans.checked){
		console.log("moedertaal is frans");
	} else{
		console.log('moedertaal is engels');
	}
}
const getBuurland = () => {
	let buurland = document.getElementById("selFavorieteBuurland").value;
	console.log("favoriete buurland is " + buurland.toString());
}
const getBestelling = () => {
	let bestellingLog = "Bestelling bestaat uit ";
	let bestelling = document.getElementById("selBestelling").options;
	for(let i = 0; i < bestelling.length;i++){
		if(bestelling[i].selected){
			bestellingLog += bestelling[i].value.toString() + " ";
		}
	}
	console.log(bestellingLog);
}
window.addEventListener("load", setup);
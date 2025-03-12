const setup = () => {
	let btnSend = document.getElementById('btnSend');

	btnSend.addEventListener('click',verander)
}
const verander = () => {
	let txtText = document.getElementById('txtText').value;
	let woord ="";
	let plaatsDe= txtText.indexOf("de")
	console.log(plaatsDe)

	//console.log("Tekst: "+ txtText);
	//for (let i = 0; i < txtText.length; i++) {
	//	if(txtText[i]===" "){ //Spatie gevonden
	//		woord+= txtText.substring(0,i);
	//		if (woord ==="de" || woord==="De"){
	//			console.log("gevonden: "+ woord);
	//			console.log("");
	//		}
	//	}
	//}
}
window.addEventListener("load", setup);
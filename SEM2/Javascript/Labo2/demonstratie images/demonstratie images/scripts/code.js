
const setup = () => {
	let btnVoegToe = document.getElementById("btnVoegToe");
	btnVoegToe.addEventListener("click", voegToe);
}

const voegToe = () => {

	let txtInput = document.getElementById("txtInput");
	console.log(txtInput);

	let url = txtInput.value;
	console.log(url);

	let divImages = document.getElementById("divImages");
	console.log(divImages);

	divImages.innerHTML += "<img src='"+url+"'>";
	txtInput.value="";
}


window.addEventListener('load',setup);




















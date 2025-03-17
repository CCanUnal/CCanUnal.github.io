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

//###########################################################"
//###########################################################"
//                                                         ##"
//Een ander manier:                                        ##"

/*const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener('click', replaceDeByHet);
}

const replaceDeByHet = () => {
    let zin = document.getElementById("input").value;

    if(zin.slice(0, 3) === 'De ') {
        zin = 'Het' + zin.slice(2);
    }

    let output = "";
    for(let i = 0; i < zin.length; i++) {
        if(zin.slice(i, i + 4) === ' de ') {
            output += zin.slice(0, i) + ' het' + zin.slice(i + 3);
        }
    }
    console.log(output);
}

window.addEventListener("load", setup);*/
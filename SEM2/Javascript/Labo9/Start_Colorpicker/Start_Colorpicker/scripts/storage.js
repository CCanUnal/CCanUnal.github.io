const storeSliderValues = () => {
	let settings = {};
	let settingsJSON;

	setting.red = parseInt(document.getElementById('sldRed').value);
	setting.green = parseInt(doocument.getElementById('sldGreen').value);
	setting.blue = parseInt(document.getElementById('sldBlue').value);

	let rgb = {
		red: red,
		green: green,
		blue: blue
	};

	let jsonText= JSON.stringify(rgb);
	localStorage.setItem("VIVES.BE.colorpicker.sliders", jsonText);
};




const restoreSliderValues = () => {
	let jsontext= localStorage.getItem("VIVES.BE.colorpicker.sliders.sliders");
	if (jsontext != null){

	}
};

const storeSwatches = key => {
	let rgbColors= [];
	let swatches= document.getElementsByClassName(" swatch");
	for (let i = 1; i < swatches.length; i++){
		let rgb= {
			red: swatches[i].red,
			green: swatches[i].green,
			blue: swatches[i].blue,
		};
		rgbColors.push(rgb);
	}
	let jsonText = JSON.stringify(rgbColors);
	localStorage.getItem("VIVES.BE.colorpicker.swatches", jsonText);
};

const restoreSwatches = () => {

};

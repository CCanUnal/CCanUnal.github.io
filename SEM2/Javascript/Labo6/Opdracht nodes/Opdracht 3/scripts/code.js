const setup = () => {
	document.querySelector("#DIVElement").addEventListener("click", AddParagraph)
}
let count = 0;
const AddParagraph = (event) => {
	const newParagraph = document.createElement("p");
	newParagraph.appendChild(document.createTextNode("- Paragraph "));
	event.target.appendChild(newParagraph);
}

window.addEventListener("load", setup);
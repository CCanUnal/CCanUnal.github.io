const setup = () => {
}

window.addEventListener("load", () => {
	const dragItem = document.getElementById("dragItem");
	const dropZone = document.getElementById("dropZone");


	//---------------------------------- DRAGSTART -----------------------------

	dragItem.addEventListener("dragstart", e => {
		//Hier bewaar je de string "dragItem"
		// onder het MIME-type "text/plain" in het dataTransfer-object.
		e.dataTransfer.setData("text/plain", "dragItem");
	});


	//---------------------------------- DRAGOVER -----------------------------

	dropZone.addEventListener("dragover", e => {
		e.preventDefault(); // zonder dit werkt drop niet
	});


	//---------------------------------- DROP -----------------------------

	dropZone.addEventListener("drop", e => {
		e.preventDefault();
		const id = e.dataTransfer.getData("text/plain");
		const draggedElement = document.getElementById(id);
		dropZone.appendChild(draggedElement);
	});
});
window.addEventListener("load", setup);

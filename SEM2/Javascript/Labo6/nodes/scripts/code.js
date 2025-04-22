const setup = () => {
	// selector node
	let p = document.getElementById("para");
	//get node name and type
	console.log(p.nodeName, p.nodeType);



	// get node name and node type of child node
	console.log(p.firstChild.nodeName, p.firstChild.nodeType);

	console.log(p.firstElementChild, p.firstChild.nodeType);
	//get node name and type of next sibling
	console.log(p.nextElementSibling.nodeName, p.nextElementSibling.nodeType);
}
window.addEventListener("load", setup);
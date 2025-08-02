let tasks = []; // Array waarin alle taken worden opgeslagen

// Wordt uitgevoerd bij het laden van de pagina
const setup = () => {
	loadTasks(); // Laad taken uit localStorage
	renderTasks(); // Teken alle taken op het bord
	setupEventListeners(); // Stel event listeners in
};



// Laad taken uit localStorage
const loadTasks = () => {

	const saved = localStorage.getItem("KANBAN-TASKS");
	if (saved) {
		tasks = JSON.parse(saved); // Parseer de JSON string naar een array
	}
};



// Sla taken op in localStorage
const saveTasks = () => {
	localStorage.setItem("KANBAN-TASKS", JSON.stringify(tasks));
};



// Voeg event listeners toe voor knoppen en drag/drop
const setupEventListeners = () => {
	document.getElementById("addTaskBtn").addEventListener("click", handleAddTask); // Klik op "Voeg taak toe"
	document.getElementById("removeBtn").addEventListener("click", removeAllTasks); // Klik op "Verwijderd Alles"

	document.querySelectorAll(".column").forEach(column => {
		column.addEventListener("dragover", e => e.preventDefault()); // Zorgt ervoor dat droppen mogelijk is
		column.addEventListener("drop", e => handleDrop(e, column.dataset.status)); // Voer handleDrop uit bij drop
	});
};



// Voeg een taak toe bij klikken op de knop
const handleAddTask = () => {
	const title = document.getElementById("taskTitle").value.trim(); // Haal titel op
	const desc = document.getElementById("taskDesc").value.trim(); // Haal beschrijving op
	if (!title) return; // Stop als er geen titel is

	const newTask = {
		id: Date.now(), // Uniek ID op basis van tijd
		title: title,
		desc: desc,
		status: "todo" // Start altijd in "To Do"
	};

	tasks.push(newTask); // Voeg toe aan de lijst
	saveAndRender(); // Sla op en render opnieuw

	// Leeg de inputvelden
	document.getElementById("taskTitle").value = "";
	document.getElementById("taskDesc").value = "";
};




// Sla op en render de taken
const saveAndRender = () => {
	saveTasks(); // Sla op in localStorage
	renderTasks(); // Teken alle taken opnieuw
};




// Teken de taken per kolom
const renderTasks = () => {
	["todo", "inprogress", "done"].forEach(status => {
		const column = document.getElementById(status);
		column.querySelectorAll(".task").forEach(t => t.remove()); // Verwijder alle oude taken

		// Filter de taken op hun status en maak een div per taak
		tasks
			.filter(task => task.status === status)
			.forEach(task => {
				const taskDiv = document.createElement("div");
				taskDiv.classList.add("task"); // CSS class voor styling
				taskDiv.draggable = true; // Zorgt ervoor dat je hem kan slepen
				taskDiv.dataset.id = task.id; // Sla het ID op voor later
				taskDiv.addEventListener("dragstart", handleDragStart); // Start drag event

				const titleEl = document.createElement("strong");
				titleEl.textContent = task.title; // Titel toevoegen

				const descEl = document.createElement("p");
				descEl.textContent = task.desc; // Beschrijving toevoegen


				taskDiv.appendChild(titleEl);
				taskDiv.appendChild(descEl);

				column.appendChild(taskDiv); // Voeg taak toe aan de kolom
			});
	});
};

let draggedTaskId = null; // Houdt bij welke taak je sleept


// Start drag event: sla het ID op en zet het in dataTransfer
const handleDragStart = (e) => {
	draggedTaskId = e.target.dataset.id;
	e.dataTransfer.setData("text/plain", draggedTaskId);
};




// Drop event: verander de status en verplaats visueel
const handleDrop = (e, newStatus) => {

	e.preventDefault();
	const draggedId = e.dataTransfer.getData("text/plain"); // Haal ID op
	const task = tasks.find(t => t.id === Number(draggedId)); // Zoek de taak op in de lijst

	if (task) {
		task.status = newStatus; // Update status

		// Verplaats het element direct naar de nieuwe kolom
		const draggedElement = document.querySelector(`.task[data-id="${draggedId}"]`);
		const column = e.currentTarget;
		column.appendChild(draggedElement);

		saveTasks(); // Sla de nieuwe status op
	}
};



// Verwijder alle taken
const removeAllTasks = () => {
	tasks = []; // Leeg de lijst
	saveAndRender(); // Render leeg bord
};

// Start het script na het laden van de pagina
window.addEventListener("load", setup);

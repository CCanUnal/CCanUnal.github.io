let tasks = [];

const setup = () => {
	loadTasks();
	renderTasks();
	setupEventListeners();
};

const loadTasks = () => {
	const saved = localStorage.getItem("KANBAN-TASKS");
	if (saved) {
		tasks = JSON.parse(saved);
	}
};

const saveTasks = () => {
	localStorage.setItem("KANBAN-TASKS", JSON.stringify(tasks));
};

const setupEventListeners = () => {
	document.getElementById("addTaskBtn").addEventListener("click", handleAddTask);
	document.getElementById("removeBtn").addEventListener("click", removeAllTasks);

	document.querySelectorAll(".column").forEach(column => {
		column.addEventListener("dragover", e => e.preventDefault());
		column.addEventListener("drop", e => handleDrop(e, column.dataset.status));
	});
};

const handleAddTask = () => {
	const title = document.getElementById("taskTitle").value.trim();
	const desc = document.getElementById("taskDesc").value.trim();
	if (!title) return;

	const newTask = {
		id: Date.now(),
		title: title,
		desc: desc,
		status: "todo"
	};

	tasks.push(newTask);
	saveAndRender();

	document.getElementById("taskTitle").value = "";
	document.getElementById("taskDesc").value = "";
};

const saveAndRender = () => {
	saveTasks();
	renderTasks();
};

const renderTasks = () => {
	["todo", "inprogress", "done"].forEach(status => {
		const column = document.getElementById(status);
		column.querySelectorAll(".task").forEach(t => t.remove());

		tasks
			.filter(task => task.status === status)
			.forEach(task => {
				const taskDiv = document.createElement("div");
				taskDiv.classList.add("task");
				taskDiv.draggable = true;
				taskDiv.dataset.id = task.id;
				taskDiv.addEventListener("dragstart", handleDragStart);

				const titleEl = document.createElement("strong");
				titleEl.textContent = task.title;

				const descEl = document.createElement("p");
				descEl.textContent = task.desc;

				taskDiv.appendChild(titleEl);
				taskDiv.appendChild(descEl);
				column.appendChild(taskDiv);
			});
	});
};

let draggedTaskId = null;

const handleDragStart = (e) => {
	draggedTaskId = e.target.dataset.id;
};

const handleDrop = (e, newStatus) => {
	e.preventDefault();
	const task = tasks.find(t => t.id === draggedTaskId);
	if (task) {
		task.status = newStatus;
		saveAndRender();
	}
};

const removeAllTasks = () => {
	tasks = [];
	saveAndRender();
};

window.addEventListener("load", setup);

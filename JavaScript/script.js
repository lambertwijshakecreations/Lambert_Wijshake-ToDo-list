const getItemByName = document.querySelector("#headInput");
const list = document.querySelector("#taskList");

const showDataOnConsole = async function () {
	try {
		const data = await getTodos();
		console.log(data);
	} catch (error) {
		console.log("Ik kan geen resultaten weergeven");
	}
};

const addItemToList = async () => {
	list.innerHTML = "";
	const tasks = await getTodos();
	tasks.forEach((task) => {
		createTaskList(task);
	});
};

const createTaskList = (task) => {
	const listItem = document.createElement("li");
	listItem.id = task._id;
	const span = document.createElement("span");
	span.innerText = task.description;
	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	listItem.appendChild(checkbox);
	listItem.appendChild(span);
	const deleteBtn = document.createElement("i");
	deleteBtn.className = "fa fa-trash";
	deleteBtn.addEventListener("click", () => deleteTask(task._id));
	listItem.append(deleteBtn);
	list.appendChild(listItem);
};

const deleteTask = async (id) => {
	const deleteListItem = document.getElementById(id);
	list.removeChild(deleteListItem);
	await deleteTodo(id);
	showDataOnConsole();
};

const addItemToAPI = async function () {
	try {
		const taskName = getItemByName.value;
		const task = {
			description: taskName,
			done: false,
		};
		await postTodo(task);
		getItemByName.value = "";
		showDataOnConsole();
	} catch (error) {
		console.log("kan niet worden verstuurd");
	}
};

const addTaskButton = document
	.querySelector("#addBtn")
	.addEventListener("click", () => {
		addItemToAPI(), addItemToList();
	});

showDataOnConsole();

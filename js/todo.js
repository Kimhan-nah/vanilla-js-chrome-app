const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
	const li = event.target.parentElement;
	// remove the <li> element from the DOM
	li.remove();
	// remove the element of toDos array equal to li.id
	toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
	// update toDos array
	saveToDos();
}

function paintToDo(newTodoObj) {
	const li = document.createElement("li");
	li.id = newTodoObj.id;
	const span = document.createElement("span");
	span.innerText = newTodoObj.text;
	const button = document.createElement("button");
	button.classList.add("button");
	button.classList.add("button1");
	button.innerText = "ⓧ";
	button.addEventListener("click", deleteToDo);
	li.appendChild(span);
	li.appendChild(button);
	toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
	event.preventDefault();
	const newTodo = toDoInput.value;
	toDoInput.value = "";
	const newTodoObj = {
		text: newTodo,
		id: Date.now()
	}
	toDos.push(newTodoObj);
	paintToDo(newTodoObj);
	saveToDos();			// save
} 

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
	const parsedToDos = JSON.parse(savedToDos);
	toDos = parsedToDos;		// initialization toDos[]
	parsedToDos.forEach(paintToDo);
}

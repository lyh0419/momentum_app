const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const username = localStorage.getItem("username");
if (username === null) {
  toDoForm.classList.add("hidden");
} else if (username !== null) {
  toDoForm.classList.remove("hidden");
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  console.log(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

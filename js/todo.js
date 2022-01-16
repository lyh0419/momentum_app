const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

//username 없으면 창 숨기기 시작
const username = localStorage.getItem("username");
if (username === null) {
  toDoForm.classList.add("hidden");
} else if (username !== null) {
  toDoForm.classList.remove("hidden");
}
// username 없으면 창 숨기기 종료

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = newTodo;
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

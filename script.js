const addTodo = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const todoInput = document.getElementById("todoInput");

function addTodoEntry() {
  const todoEntry = document.createElement("li");
  const todoText = document.createElement("span");
  const deleteEntry = document.createElement("button");

  deleteEntry.textContent = "X";
  deleteEntry.setAttribute("class", "delBtn");
  deleteEntry.setAttribute("aria-label", "Aufgabe löschen");
  deleteEntry.setAttribute("title", "Aufgabe löschen");

  deleteEntry.addEventListener("click", function () {
    todoEntry.remove();
  });

  if (todoInput.value.trim() !== "") {
    todoText.textContent = todoInput.value.trim();
    todoEntry.appendChild(deleteEntry);
    todoList.appendChild(todoEntry);
    todoEntry.appendChild(todoText);

    todoInput.value = "";
    todoInput.focus();
  } else {
    alert("fehlende Eingabe!");
  }
}

addTodo.addEventListener("click", function () {
  addTodoEntry();
});

todoInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    addTodoEntry();
  }
});

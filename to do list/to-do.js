const addTask = () => {
  const taskInput = document.getElementById("input");
  const listTask = document.getElementById("listtask");

  const taskValue = taskInput.value.trim();

  if (taskValue === "") return;

  const li = document.createElement("li");
  li.innerHTML = taskValue;

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "DELETE";
  deleteButton.className = "delete";

  deleteButton.addEventListener("click", (e) => {
    e.stopPropagation;
    listTask.removeChild(li);
  });

  li.appendChild(deleteButton);

  listTask.appendChild(li);

  taskInput.value = "";
};

document.getElementById("addtaskbtn").addEventListener("click", addTask);
function addTask() {
    const input = document.getElementById("task-input");
    const taskText = input.value.trim();
  
    if (taskText === "") return;
  
    const li = document.createElement("li");
  
    const span = document.createElement("span");
    span.textContent = taskText;
  
    const actions = document.createElement("div");
    actions.classList.add("task-actions");
  
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => editTask(span);
  
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => li.remove();
  
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);
  
    li.appendChild(span);
    li.appendChild(actions);
  
    document.getElementById("task-list").appendChild(li);
    input.value = "";
  }
  
  function editTask(span) {
    const newTask = prompt("Edit task:", span.textContent);
    if (newTask !== null && newTask.trim() !== "") {
      span.textContent = newTask.trim();
    }
  }
  
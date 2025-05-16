function addTask() {
    const input = document.getElementById("task-input");
    const taskText = input.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }
  
    const li = document.createElement("li");
  
    const span = document.createElement("span");
    span.innerText = taskText;
  
    const taskButtons = document.createElement("div");
    taskButtons.className = "task-buttons";
  
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.onclick = () => toggleEdit(span, editBtn);
  
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = () => li.remove();
  
    taskButtons.appendChild(editBtn);
    taskButtons.appendChild(deleteBtn);
  
    li.appendChild(span);
    li.appendChild(taskButtons);
  
    document.getElementById("task-list").appendChild(li);
    input.value = "";
  }
  
  function toggleEdit(span, button) {
    if (button.innerText === "Edit") {
      const input = document.createElement("input");
      input.type = "text";
      input.value = span.innerText;
  
      span.replaceWith(input);
      button.innerText = "Save";
  
      button.onclick = () => saveEdit(input, button);
    }
  }
  
  function saveEdit(input, button) {
    const span = document.createElement("span");
    span.innerText = input.value;
  
    input.replaceWith(span);
    button.innerText = "Edit";
    button.onclick = () => toggleEdit(span, button);
  }
  
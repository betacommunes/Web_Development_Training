document.getElementById("add-btn").addEventListener("click", function () {
    const input = document.getElementById("task-input");
    const taskText = input.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }
  
    addTaskToList(taskText);
    input.value = "";
  });
  
  function addTaskToList(text) {
    const li = document.createElement("li");
  
    const span = document.createElement("span");
    span.innerText = text;
  
    const buttons = document.createElement("div");
    buttons.className = "task-buttons";
  
    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.innerText = "Edit";
    editBtn.addEventListener("click", function () {
      if (editBtn.innerText === "Edit") {
        const input = document.createElement("input");
        input.type = "text";
        input.value = span.innerText;
        span.replaceWith(input);
        editBtn.innerText = "Save";
      } else {
        const updatedText = li.querySelector("input").value.trim();
        if (updatedText === "") {
          alert("Task cannot be empty.");
          return;
        }
        span.innerText = updatedText;
        li.querySelector("input").replaceWith(span);
        editBtn.innerText = "Edit";
      }
    });
  
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", function () {
      li.remove();
    });
  
    buttons.appendChild(editBtn);
    buttons.appendChild(deleteBtn);
    li.appendChild(span);
    li.appendChild(buttons);
  
    document.getElementById("task-list").appendChild(li);
  }
  
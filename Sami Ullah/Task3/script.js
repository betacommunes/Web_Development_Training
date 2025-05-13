// Accessing elements
let input = document.querySelector("#input-task");
let addTaskBtn = document.querySelector("button");
let ul = document.querySelector("ul");

// Adding click listener on add task btn
addTaskBtn.addEventListener("click", (e) => {
  if (input.value === "") {
    alert("Write something in input field to add task");
  } else if (input.value !== "") {
    addTask();
  }
});

// Add task function
const addTask = () => {
  let li = document.createElement("li");

  li.innerHTML = `
    <div class="circle"></div>
    <p class="para">${input.value}</P>
    <div class="edit-task-btn">
       <img style="mix-blend-mode: multiply"  class="edit-img" src="images/edit.jpg"/>
    </div>
    <div class="delete-task-btn">
       <img style="mix-blend-mode: multiply" class="cross-img" src="images/cross.png"/>
    </div>
  `;
  console.log(ul);

  ul.append(li);
  input.value = "";

  li.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("cross-img") ||
      e.target.classList.contains("delete-task-btn")
    ) {
      deleteTask(e);
    } else if (
      e.target.tagName == "P" ||
      e.target.classList.contains("circle")
    ) {
      e.currentTarget.children[1].classList.toggle("checked");
      e.currentTarget.children[0].classList.toggle("active");
    } else if (
      e.target.classList.contains("edit-img") ||
      e.target.classList.contains("edit-task-btn")
    ) {
      e.target.tagName == "IMG"
        ? editTask(e.target.parentElement.previousElementSibling)
        : editTask(e.target.previousElementSibling);
    }
  });
};

let editBtn;
let taskToBeEdited;
// Edit task function
const editTask = (para) => {
  if (editBtn) {
    editBtn.remove();
  }
  console.log(para);

  input.value = para.innerText;
  addTaskBtn.style.display = "none";

  editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.classList.add("btn");
  input.after(editBtn);

  taskToBeEdited = para.parentElement;
  console.log(taskToBeEdited.children[1].innerText);

  editBtn?.addEventListener("click", (e) => {
    console.log("edit");

    taskToBeEdited.children[1].innerText = input.value;

    editBtn.remove();
    input.value = "";
    addTaskBtn.style.display = "inline";
  });
};

// Delete Task fucntion
const deleteTask = (e) => {
  e.target.parentElement.parentElement.remove();
};

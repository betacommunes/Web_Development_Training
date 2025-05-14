const inputbox = document.getElementById('inputbox');
const addbtn = document.getElementById('addbtn');
const todolist = document.getElementById('todolist');
let editTodo = null;
// const function add to do
const addTodo = () => {
    const inputText = inputbox.value.trim();
    if (inputText.length <= 0) {
        alert("You must write something in your to-do");
        return;
    }

    if (addbtn.value === "Edit") {
        editTodo.target.previousElementSibling.innerHTML = inputText;
        editLocalTodos(inputText);
        addbtn.value = "Add";
        inputbox.value = "";
    }
    else {
        //  creating p tag
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerHTML = inputText;
        li.appendChild(p);

        //  create Edit btn
        const editBtn = document.createElement("button")
        editBtn.innerText = "Edit";
        editBtn.classList.add("btn", "editBtn");
        li.appendChild(editBtn);

        //  create Delete btn
        const deleteBtn = document.createElement("button")
        deleteBtn.innerText = "Remove";
        deleteBtn.classList.add("btn", "deleteBtn");
        li.appendChild(deleteBtn);


        todolist.appendChild(li);
        inputbox.value = "";
        saveLocalTodos(inputText);
    }
}

// function to update to do
const updateTodo = (e) => {
    if (e.target.innerHTML === "Remove") {
        todolist.removeChild(e.target.parentElement);
        deleteLocalTodos(e.target.parentElement);
    }
    if (e.target.innerHTML === "Edit") {
        inputbox.value = e.target.previousElementSibling.innerHTML;
        inputbox.focus();
        addbtn.value = "Edit";
        editTodo = e;
    }
}
// funtion to save local todos
const saveLocalTodos = (todo) => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = []
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos))

}
// funtion to get local todos
const gelLocalTodos = () => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = []
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
        todos.forEach(todo => {
            //  creating p tag
            const li = document.createElement("li");
            const p = document.createElement("p");
            p.innerHTML = todo;
            li.appendChild(p);

            //  create Edit btn
            const editBtn = document.createElement("button")
            editBtn.innerText = "Edit";
            editBtn.classList.add("btn", "editBtn");
            li.appendChild(editBtn);

            //  create Delete btn
            const deleteBtn = document.createElement("button")
            deleteBtn.innerText = "Remove";
            deleteBtn.classList.add("btn", "deleteBtn");
            li.appendChild(deleteBtn);


            todolist.appendChild(li);
        });
    }
    todos.push(todos);
    localStorage.setItem("todos", JSON.stringify(todos))

}
// funtion to delete local todos
const deleteLocalTodos =(todo)=>{
         let todos;
    if (localStorage.getItem("todos") === null) {
        todos = []
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    let todoText = todo.children[0].innerHTML;
    let todoIndex = todos.indexOf(todoText);
    todos.splice(todoIndex, 1);
    localStorage.setItem("todos",JSON.stringify(todos))
    console.log(todoIndex);
    
}
// funtion to edit local todos
const editLocalTodos = (todo) =>{
      let todos = JSON.parse(localStorage.getItem("todos"));
      let todoIndex = todos.indexOf(todo);
      todos[todoIndex] = inputbox.value;
      localStorage.setItem("todos",JSON.stringify(todos));
}

document.addEventListener('DOMContentLoaded',gelLocalTodos)
addbtn.addEventListener('click', addTodo);
todolist.addEventListener('click', updateTodo)

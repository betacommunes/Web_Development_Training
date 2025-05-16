const addBtn = document.getElementById("add-task-btn")
let getInputValue = (id) => {
    return document.getElementById(id)
}

let todos = []
let updateID = null

addBtn.addEventListener('click', () => {
    let titleValue = getInputValue("task-title")
    let descriptionValue = getInputValue("task-desc")

    if (!titleValue.value || !descriptionValue.value) {
        return alert("Please fill in both fields")
    }

    if (updateID) {
        todos = todos.map(todo => todo.id === updateID ? { ...todo, title: titleValue.value, description: descriptionValue.value } : todo)

        editId = null;
        addBtn.textContent = "Add Task";
    } else {
        const newTodo = {
            id: todos.length + 1,
            title: titleValue.value,
            description: descriptionValue.value
        }

        todos.push(newTodo)
    }

    titleValue.value = ""
    descriptionValue.value = ""

    taskDisplay.innerHTML = ""
    display()
})

const taskDisplay = document.getElementById("task-list")

function display() {
    taskDisplay.innerHTML += todos.map(todo =>
        `
            <li
                class="flex justify-between items-start bg-blue-100 p-4 rounded-xl shadow-sm"
            >
                <div>
                    <h3 class="text-lg font-semibold text-blue-800">
                        ${todo.title}
                    </h3>
                    <p class="text-sm text-blue-700">
                        ${todo.description}
                    </p>
                </div>
                <div class="flex space-x-2 ml-4">
                    <button
                        class="edit-btn bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition"
                        onclick={updateTask(${todo.id})}
                    >
                        Edit
                    </button>
                    <button
                        class="delete-btn bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                        onclick={deleteTask(${todo.id})}
                    >
                        Delete
                    </button>
                </div>
            </li>
            `

    )
}

display()

function deleteTask(todoID) {
    todos = todos.filter(todo => todo.id !== todoID)
    taskDisplay.innerHTML = ""
    display()
}

function updateTask(todoID) {
    const todo = todos.find(todo => todo.id === todoID)

    if (todo) {
        getInputValue("task-title").value = todo.title;
        getInputValue("task-desc").value = todo.description;
        addBtn.textContent = 'Update Task'
        updateID = todoID
    }
}
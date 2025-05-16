
const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const alertBox = document.getElementById('alert');
const formBtn = document.getElementById('formBtn')

// Initialize localStorage to persist-data
let todos = JSON.parse(localStorage.getItem('todos')) || [];
let isEditing = false;
let editId = null;

// Render todos
function renderTodos() {
    todoList.innerHTML = '';
    
    if (todos.length === 0) {
        todoList.innerHTML = '<tr><td colspan="4" class="no-tasks">No tasks found. Add a new task!</td></tr>';
        return;
    }
    
    todos.forEach((todo, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td class="td-text">${todo.text}</td>
            <td>
                <button class="action-btn btn-edit" onclick="editTodo(${todo.id})">Edit</button>
            </td>
            <td>
                <button class="action-btn btn-delete" onclick="deleteTodo(${todo.id})">Delete</button>
            </td>
        `;
        todoList.appendChild(tr);
    });
}

// Show alerts Box
function showAlert(Message, Class) {
    alertBox.textContent = Message;
    alertBox.className = `alert alert-${Class}`;
    alertBox.style.display = 'block';
    
    // Hide alert after 5 seconds
    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 5000);
}

// Add or Update todo
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const todoText = todoInput.value.trim();
    
    if (!todoText) {
        showAlert('Please enter a task', 'error');
        return;
    }
    
    if (isEditing) {
        
        todos = todos.map(todo => 
            todo.id === editId ? { ...todo, text: todoText } : todo
        );
        showAlert('Task updated successfully', 'success');
        isEditing = false;
        editId = null;
        formBtn.innerText = 'Add'
        formBtn.classList = 'btn'
    } else {
        // Add new todo
        const newTodo = {
            id: Date.now(),
            text: todoText
        };
        todos.push(newTodo);
        showAlert('Task added successfully', 'success');
    }
    
    // Save to localStorage and re-render
    localStorage.setItem('todos', JSON.stringify(todos));
    todoInput.value = '';
    renderTodos();
});

// Edit todo
function editTodo(id) {
    const todoToEdit = todos.find(todo => todo.id === id);
    formBtn.innerText = 'Update'
    formBtn.classList = 'btn btn-edit'

    if (todoToEdit) {
        todoInput.value = todoToEdit.text;
        todoInput.focus();
        isEditing = true;
        editId = id;
    }
}

// Delete todo
function deleteTodo(id) {
    if (confirm('Are you sure you want to delete this task?')) {
        todos = todos.filter(todo => todo.id !== id);
        localStorage.setItem('todos', JSON.stringify(todos));
        showAlert('Task deleted successfully', 'success');
        renderTodos();
    }
}

// Initial render
renderTodos();
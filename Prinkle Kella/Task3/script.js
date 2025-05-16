document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;

        taskList.appendChild(listItem);
        taskInput.value = ''; // Clear the input field

        // Add event listeners to the newly created buttons
        const editButton = listItem.querySelector('.edit-btn');
        const deleteButton = listItem.querySelector('.delete-btn');
        editButton.addEventListener('click', editTask);
        deleteButton.addEventListener('click', deleteTask);
    }

    function editTask(event) {
        const listItem = event.target.parentNode;
        const taskSpan = listItem.querySelector('.task-text');
        const editButton = event.target;

        if (editButton.textContent === 'Edit') {
            const currentText = taskSpan.textContent;
            taskSpan.innerHTML = `<input type="text" class="edit-input" value="${currentText}">`;
            editButton.textContent = 'Save';

            const saveButton = listItem.querySelector('.save-btn');
            if (saveButton) {
                saveButton.removeEventListener('click', saveEditedTask); // Avoid duplicate listeners
            }
            editButton.addEventListener('click', saveEditedTask);
        }
    }

    function saveEditedTask(event) {
        const listItem = event.target.parentNode;
        const inputField = listItem.querySelector('.edit-input');
        const taskSpan = listItem.querySelector('.task-text');
        const editButton = event.target;

        const newText = inputField.value.trim();
        if (newText !== '') {
            taskSpan.textContent = newText;
            editButton.textContent = 'Edit';
        } else {
            alert('Task cannot be empty!');
        }
    }

    function deleteTask(event) {
        const listItem = event.target.parentNode;
        taskList.removeChild(listItem);
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Add new task
    addTaskBtn.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        } else {
            alert('Please enter a task!');
        }
    });

    // Also allow adding tasks with Enter key
    taskInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTaskBtn.click();
        }
    });

    // Function to add a new task
    function addTask(taskText) {
        const li = document.createElement('li');
        li.className = 'task-item';

        const taskSpan = document.createElement('span');
        taskSpan.className = 'task-text';
        taskSpan.textContent = taskText;

        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'task-actions';

        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', function () {
            editTask(li, taskSpan);
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function () {
            taskList.removeChild(li);
        });

        actionsDiv.appendChild(editBtn);
        actionsDiv.appendChild(deleteBtn);

        li.appendChild(taskSpan);
        li.appendChild(actionsDiv);

        taskList.appendChild(li);
    }

    // EditTask function
    function editTask(taskItem, taskTextElement) {
        const currentText = taskTextElement.textContent;
        const actionsDiv = taskItem.querySelector('.task-actions');

        // Create textarea instead of input for better multiline editing
        const inputField = document.createElement('textarea');
        inputField.className = 'edit-input';
        inputField.value = currentText;
        inputField.rows = 3; // Show 3 lines by default
        inputField.style.width = '100%'; // Take full width available

        // Replace text with textarea
        taskItem.replaceChild(inputField, taskTextElement);

        // Change Edit button to Save button
        const editBtn = actionsDiv.querySelector('.edit-btn');
        editBtn.textContent = 'Save';
        editBtn.className = 'save-btn';

        // Remove previous event listener and add new one
        const newEditBtn = editBtn.cloneNode(true);
        editBtn.replaceWith(newEditBtn);

        newEditBtn.addEventListener('click', function () {
            const newText = inputField.value.trim();
            if (newText !== '') {
                taskTextElement.textContent = newText;
                taskItem.replaceChild(taskTextElement, inputField);
                newEditBtn.textContent = 'Edit';
                newEditBtn.className = 'edit-btn';

                // Reattach the original edit event listener
                const revertedEditBtn = newEditBtn.cloneNode(true);
                newEditBtn.replaceWith(revertedEditBtn);
                revertedEditBtn.addEventListener('click', function () {
                    editTask(taskItem, taskTextElement);
                });
            } else {
                alert('Task cannot be empty!');
            }
        });
    }
});
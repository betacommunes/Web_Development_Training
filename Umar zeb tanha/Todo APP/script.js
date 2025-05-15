// script.js

const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

function createTaskElement(taskText) {
  const li = document.createElement('li');
  li.className = 'task-item';

  const span = document.createElement('span');
  span.className = 'task-text';
  span.textContent = taskText;

  const buttonGroup = document.createElement('div');
  buttonGroup.className = 'task-buttons';

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.className = 'edit';
  editBtn.onclick = () => toggleEditTask(li, span, editBtn);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete';
  deleteBtn.onclick = () => li.remove();

  buttonGroup.appendChild(editBtn);
  buttonGroup.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(buttonGroup);

  return li;
}

function toggleEditTask(li, span, button) {
  if (button.textContent === 'Edit') {
    const input = document.createElement('input');
    input.type = 'text';
    input.value = span.textContent;
    input.className = 'task-text';
    li.insertBefore(input, span);
    li.removeChild(span);
    button.textContent = 'Save';
    button.className = 'save';
  } else {
    const input = li.querySelector('input');
    const newText = input.value.trim();
    if (newText === '') return;
    span.textContent = newText;
    li.insertBefore(span, input);
    li.removeChild(input);
    button.textContent = 'Edit';
    button.className = 'edit';
  }
}

function handleAddTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;
  const taskItem = createTaskElement(taskText);
  taskList.appendChild(taskItem);
  taskInput.value = '';
}

taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    handleAddTask();
  }
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    if (taskInput.value.trim() !== '') {
      const newTask = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.onclick = function() {
        toggleTask(this);
      };
      newTask.appendChild(checkbox);
      const taskText = document.createElement('span');
      taskText.textContent = taskInput.value;
      newTask.appendChild(taskText);
      const deleteButton = document.createElement('button');
      deleteButton.textContent = '❌';
      deleteButton.onclick = function() {
        deleteTask(this);
      };
      newTask.appendChild(deleteButton);
      taskList.appendChild(newTask);
      taskInput.value = '';
    } else {
      alert('Please enter a task!');
    }
  }
  
  function toggleTask(checkbox) {
    const task = checkbox.parentElement;
    if (checkbox.checked) {
      task.style.textDecoration = 'line-through';
      const completedTasks = document.getElementById('completedTasks');
      completedTasks.appendChild(task);
    } else {
      task.style.textDecoration = 'none';
      const taskList = document.getElementById('taskList');
      taskList.appendChild(task);
    }
  }
  
  function deleteTask(button) {
    const task = button.parentElement;
    task.remove();
  }
  
  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      addTask();
    }
  }
  
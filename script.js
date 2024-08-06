document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', () => {
        if (taskInput.value.trim()) {
            addTask(taskInput.value.trim());
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('completed');
        } else if (e.target.tagName === 'BUTTON' && e.target.classList.contains('delete')) {
            const taskItem = e.target.parentElement;
            taskItem.style.transition = 'opacity 0.5s';
            taskItem.style.opacity = '0';
            setTimeout(() => taskItem.remove(), 500);
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete');

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }
});

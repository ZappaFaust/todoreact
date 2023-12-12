import React, { useState } from 'react';

function TodoList() {
  // State for managing tasks and input for adding new tasks
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Function to add a new task to the list
  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  // Update the newTask state based on user input
  const handleTaskInputChange = (e) => {
    setNewTask(e.target.value);
  };

  // Function to handle task completion (toggle completed status)
  const handleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Function to delete a task from the list
  const handleDeleteTask = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      {/* Input field for adding new tasks */}
      <input
        type="text"
        placeholder="Enter a task"
        value={newTask}
        onChange={handleTaskInputChange}
      />
      {/* Button to add a new task */}
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {/* Display the list of tasks */}
        {tasks.map((task) => (
          <li key={task.id}>
            {/* Checkbox to mark task as completed */}
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleTaskCompletion(task.id)}
            />
            {/* Task text with strike-through if completed */}
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            {/* Button to delete a task */}
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

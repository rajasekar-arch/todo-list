import React, { useState } from 'react';
import Task from './components/task';


function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [dueDate, setDueDate] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      const newTaskObj = {
        id: Date.now(),
        text: newTask,
        completed: false,
        dueDate: dueDate || null,
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
      setDueDate('');
    }
  };
  
  const editTask = (id, newText, newDate) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, text: newText, dueDate: newDate } : task
      )
    );
  };
  

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <input
        type="text"
        className="border p-2 mb-2 w-full"
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
      />
      <button
        onClick={addTask}
        className="bg-blue-500 text-white p-2 w-full mb-4"
      >
        Add Task
      </button>
      <div>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onToggle={toggleTask}
            onEdit={editTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

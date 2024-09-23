import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faTrashAlt, faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons';

const DailyTaskPlanner = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Add a new task to the list
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask(''); // Clear the input after adding the task
    }
  };

  // Toggle task completion status
  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Delete task from the list
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h1 className="text-2xl font-bold mb-4">Daily Task Planner</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
          className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={!newTask.trim()}
        >
          <FontAwesomeIcon icon={faPlusCircle} size="lg" />
        </button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className="flex items-center justify-between p-2 border-b">
            <div className="flex items-center">
              <button onClick={() => toggleTask(task.id)} className="mr-2">
                {task.completed ? (
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" size="lg" />
                ) : (
                  <FontAwesomeIcon icon={faCircle} className="text-gray-300" size="lg" />
                )}
              </button>
              <span className={task.completed ? 'line-through text-gray-500' : ''}>
                {task.text}
              </span>
            </div>
            <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700">
              <FontAwesomeIcon icon={faTrashAlt} size="lg" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyTaskPlanner;

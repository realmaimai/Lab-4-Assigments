import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  // Function to add a new task
  const addTask = (taskText) => {
    setTasks([...tasks, taskText]); 
  };

  return (
    <ScrollView>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} tasks={tasks} />
    </ScrollView>
  );
}

export default App;

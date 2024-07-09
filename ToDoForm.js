import React from 'react';
import { 
    View, 
    TextInput, 
    Button,  
    StyleSheet 
} from 'react-native';

// Destructure the addTask function passed from the App component
// added tasks to the props which represents the current array to check for duplicates
function ToDoForm ({ addTask, tasks }) {
  const [taskText, setTaskText] = React.useState('');

  // Function to add a new task but checks for duplicate tasks first before adding
function handleAddTask() {
  // assign taskText to a new constant newTask
  const newTask = taskText.trim();
  // check if newTask / taskText is not empty and if it is not already in the tasks array
    if (newTask !== '' && !tasks.includes(newTask)) {
      addTask(newTask); // Call addTask function with trimmed taskText
      setTaskText(''); // Clear the input field after adding the task
    }
  };

  return (
    <View style={styles.form}>
      <TextInput 
        style={styles.input} 
        placeholder="Add a new task..." 
        onChangeText={(text) => setTaskText(text)} 
        value={taskText} 
      />
      <Button 
        style={styles.buttonContainer}
        title="Add Task" 
        onPress={ handleAddTask } />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 30,
  },
  input: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: 'grey',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    
  },
  buttonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },

});

export default ToDoForm;

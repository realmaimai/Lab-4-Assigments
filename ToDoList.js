import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ToDoList({ tasks }) {
  return (
    <View>
      {tasks.map((task, index) => (
        <Text key={index} style={styles.task}>
          {task}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    flexDirection: 'row',
    marginTop: 50,
    padding: 4,
    borderBottomWidth: 3,
    borderColor: '#ccc',
  },
});

export default ToDoList;

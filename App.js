import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import TodoForm from './components/todoForm';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'todo1', id: 'unique1'},
    {text: 'todo2', id: 'unique2'},
    {text: 'todo3', id: 'unique3'},
  ]);

  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id != id);
    })
  }
  const addTodo = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, {text: todo, id: 'unique'+(prevTodos.length+1)}]
    })
  }

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <TodoForm addTodo={addTodo}/>
        <View style={styles.list}>
          {/* FlatList is better than Lists as it only reders items that are
            visible on viewport -- it doesn't render the whole list */}
          <FlatList
            keyExtractor={(item) => item.id}
            data={todos}
            renderItem={({item}) => (
              <TodoItem item={item} deleteTodo={deleteTodo}/>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});

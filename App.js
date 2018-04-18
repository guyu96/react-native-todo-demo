import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

export default class App extends Component {
  state = {
    nextKey: 0,
    todoEntries: []
  };

  addTodoEntry = (text) => {
    this.setState((prevState) => {
      return {
        nextKey: prevState.nextKey + 1,
        todoEntries: [
          ...prevState.todoEntries,
          { key: this.state.nextKey, text: text}
        ]
      };
    });
  }

  render() {
    return (
      <View style={ styles.container }>
        <TodoInput addTodo={ this.addTodoEntry } />
        <TodoList todoEntries={ this.state.todoEntries }/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 40,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

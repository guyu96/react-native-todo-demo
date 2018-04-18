import React, { Component } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import TodoEntry from './TodoEntry'

export default class TodoList extends Component {
  render() {
    return (
      <FlatList
        data={ this.props.todoEntries }
        renderItem={ ({ item }) =>  <TodoEntry text={ item.text } />}
      />
    );
  }
}

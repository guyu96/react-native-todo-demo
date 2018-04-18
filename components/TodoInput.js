import React, { Component } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

export default class TodoInput extends Component {
  state = {
    text : ''
  };

  handleSubmit = () => {
    if (this.state.text === '') {
      return;
    }
    this.props.addTodo(this.state.text);
    this.setState({
      text : ''
    });
  }

  render() {
    return (
      <View>
        <TextInput
          onChangeText={ (text) => this.setState( { text } ) }
          value={ this.state.text }
          style={ styles.input }
        />
        <Button
          title='Add'
          onPress={ this.handleSubmit }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input : {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
});

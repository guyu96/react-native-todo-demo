import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class TodoEntry extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.text }>{ this.props.text }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 4,
    backgroundColor: '#eee'
  },

  text: {
    fontSize: 16
  }
});

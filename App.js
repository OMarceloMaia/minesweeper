import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import params from './src/params'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines</Text>
        <Text style={styles.instructions}>Tamanho da grade:
          {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
  welcome: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  instructions: {

  }, 
});



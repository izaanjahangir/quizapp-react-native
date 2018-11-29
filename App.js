import React from 'react';
import AppContainer from './config/Router';

import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    return (
      <AppContainer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

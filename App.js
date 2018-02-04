import React, { Component } from 'react';
import { AppRegistru, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('react-native-tutorial', () => App);

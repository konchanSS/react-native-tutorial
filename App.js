import React, {Component} from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View >
        <View style={{width: 50, height:  50, backgroundColor: 'powderblue'}}>
          <Text>powderblue</Text>
        </View>
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
      </View>
    );
  }
}

AppRegistry.registerComponent('react-native-tutorial', () => FixedDimensionsBasics);

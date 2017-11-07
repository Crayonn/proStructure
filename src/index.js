import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Button } from 'react-native-elements';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          raised
          icon={{ name: 'home', size: 32 }}
          buttonStyle={{ backgroundColor: 'red', borderRadius: 10 }}
          textStyle={{ textAlign: 'center' }}
          title={`Welcome to\nReact Native Elements`}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

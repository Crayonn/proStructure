import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Login extends Component {
  static navigationOptions = {
    title: 'Login',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
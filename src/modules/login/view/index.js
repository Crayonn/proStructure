import React, { Component } from 'react';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import { StyleSheet, View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';

import Creators from '../actions';

@connect(({ login }) => {

  return login;
})
export default class Login extends Component {
  static navigationOptions = {
    title: 'Login',
  }

  @autobind
  handleValueChanged(key, value) {
    this.props.dispatch(Creators.valueChanged(key, value));
  }

  render() {
    const { name, password } = this.props;

    return (
      <View style={styles.container}>
        <View>
          <FormLabel>NAME</FormLabel>
          <FormInput
            onChangeText={value => this.handleValueChanged('name', value)}
            value={name} />
        </View>
        <View>
          <FormLabel>PASSWORD</FormLabel>
          <FormInput
            onChangeText={value => this.handleValueChanged('password', value)}
            value={password} />
        </View>
        <View>
          <Button title="SUBMIT" />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
import React, { Component } from 'react';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import { StyleSheet, View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';

import * as actions from '../actions';

@connect(({ login }) => {

  return login;
})
export default class Login extends Component {
  static navigationOptions = {
    title: 'Login',
  }

  @autobind
  handleValueChanged(key, value) {
    this.props.dispatch(actions.valueChanged(key, value));
  }
  render() {
    const { name, password, loginPending, logoutPending } = this.props;

    return (
      <View style={styles.container}>
        <View>
          <FormLabel></FormLabel>
          <FormInput
            onChangeText={value => this.handleValueChanged('name', value)}
            value={name} />
        </View>
        <View>
          <FormLabel></FormLabel>
          <FormInput
            onChangeText={value => this.handleValueChanged('password', value)}
            value={password} />
        </View>
        <View>
          <Button
            onPress={() => this.props.dispatch(actions.loginRequest(name, password))}
            buttonStyle={[styles.button]}
            loading={loginPending}
            title="LOGIN" />
          <Button
            onPress={() => this.props.dispatch(actions.logoutRequest(name))}
            buttonStyle={[styles.button]}
            loading={logoutPending}
            title="LOGOUT" />
          <Button
            onPress={() => this.props.dispatch({ type: 'RESET_LOGIN' })}
            buttonStyle={[styles.button]}
            title="RESET" />
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
  button: {
    marginVertical: 6,
  }
});
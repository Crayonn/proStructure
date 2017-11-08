import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Stack, Scene, Actions, Reducer } from 'react-native-router-flux';
import { View, Text } from 'react-native';

import createNavReducer from './reducer';
import Login from '../modules/login/view/';

export default class Navigator extends Component {
    render() {

        return (
            <Router createReducer={createNavReducer}>
                <Stack key="root">
                    <Scene key="login" component={Login} title="Login" />
                    <Scene key="home" component={() => <View><Text>home</Text></View>} title="Home" />
                </Stack>
            </Router>
        )
    }
}

import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import { View } from 'react-native';

import configStore from './store/index.js'
import AppNavigator from './navigator';

const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

const AppWithNavigationState = connect(({ nav }) => ({ nav }))(
  ({ dispatch, nav }) => (
    <AppNavigator
      navigation={addNavigationHelpers({ dispatch, state: nav })} />
  )
);

const store = configStore(navReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

// console.log(store.getState())
// store.dispatch({type:'GOODS_SUCCESS'})
// store.dispatch({type:'GOODS_FAILURE'})

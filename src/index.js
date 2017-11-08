import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configStore from './store/'
import Navigator from './navigator/';

const store = configStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

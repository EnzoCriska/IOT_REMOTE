

import React, { Component } from 'react';

import MainApp from './src/UI/mainstack';
import { Provider } from 'react-redux'
import store from './src/util/value_containt/store';
import { Root } from 'native-base';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root>
          <MainApp />
        </Root>
      </Provider>
    );
  }
}


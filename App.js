import React, { Component } from 'react';
import { Provider } from 'react-redux';
import  Store  from './src/Store';
import { Header } from './src/components';

import AppContainer from './src/navigator/Drawer';

export default class App extends Component {
  render() {
    return (
        <Provider store={Store}>
            <Header />
            <AppContainer/>
        </Provider>
    );
  }
}

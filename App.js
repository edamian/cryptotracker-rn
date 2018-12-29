import React, { Component } from 'react';
import { Provider } from 'react-redux';
import  Store  from './src/Store';

import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import { HomeScreen, AuthorScreen } from './src/components/screens';

const rootDrawer = createDrawerNavigator({
    Home: {
        screen: HomeScreen
    },
    Author: {
        screen: AuthorScreen
    }
});

const AppContainer = createAppContainer(rootDrawer);

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <AppContainer/>
      </Provider>
    );
  }
}

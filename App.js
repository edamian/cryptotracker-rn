import React, { Component } from 'react';
import { Provider } from 'react-redux';
import  Store  from './src/Store';
import { Header } from './src/components';
import { Image, TouchableOpacity, View } from 'react-native';

import AppContainer from './src/navigator/Drawer';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import DrawerActions from 'react-navigation';

class AppScreen extends Component {
    render() {
        return(
            <Provider store={Store}>
                <Header />
                <AppContainer/>
            </Provider>
        )
    }
}

const DrawerButton = (props) => {
    return(
        <View>
            <TouchableOpacity
                onPress={ () => props.dispatch(DrawerActions.toggleDrawer()) } >
                <Image
                    source={require('./resources/iconfinder_menu.png')}
                />
            </TouchableOpacity>
        </View>
    );
};

const AppNavigator = createStackNavigator({
    Home: {
        screen: AppScreen,
        navigationOptions: ({navigation}) => ({
            headerLeft:  <TouchableOpacity
                onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer()) } >
                <Image
                    source={require('./resources/iconfinder_menu.png')}
                />
            </TouchableOpacity>
        })
    }
});

const AppContainerMain = createAppContainer(AppNavigator);



export default class App extends Component {
  render() {
    return (
    <AppContainerMain/>
    );
  }
}

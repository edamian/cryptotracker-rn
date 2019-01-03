import React , { Component } from 'react';
import { View, Text } from 'react-native';
import { CryptoContainer } from './../components';

class HomeScreen extends Component {

    static navigationOptions= {
        drawerLabel: 'Crypto App'
    }

    render() {
        return (
            <View>
                <CryptoContainer/>
            </View>
        )
    }
}

export default HomeScreen;
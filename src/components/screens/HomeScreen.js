import React, { Component } from 'react';
import {Text, View} from 'react-native';
import { Header, CryptoContainer } from './../index';

class HomeScreen extends Component{
    render() {
        return(
            <View>
                <Header customTitle="Cryptocurrency App"/>
                <CryptoContainer />
            </View>
        );
    }
};

export default HomeScreen;
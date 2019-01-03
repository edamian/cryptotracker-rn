import React, { Component } from 'react';
import {View, Text, StyleSheet } from 'react-native';
import ToggleDrawer from './ToggleDrawer';
import AppContainer from './../navigator/Drawer';

class Header extends Component {

    render() {
        return (
            <View style={headerContainer}>
                <AppContainer/>
                <Text style={header}>Cryptocurrency App</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        marginTop: 55,
        alignItems: "center"
    },
    header: {
        fontWeight: "bold",
        fontSize: 25,
    }
});

const { headerContainer, header } = styles;

export default Header;
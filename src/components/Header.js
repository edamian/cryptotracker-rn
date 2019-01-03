import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AppContainer from './../navigator/Drawer';

class Header extends Component {

    handleOpenDrawer() {
        console.log('drawer opened')
    }

    render() {
        return (
            <View style={headerContainer}>
                <TouchableOpacity
                    onPress={ () => {
                        this.props.navigation.navigate('DrawerToggle');
                    }}
                >
                    <Image
                        source={require('./../../resources/iconfinder_menu.png')}
                    />
                </TouchableOpacity>
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
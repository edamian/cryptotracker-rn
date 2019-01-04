import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import DrawerNavigator from './DrawerNavigator';

const RootStack = createStackNavigator(
    {
        Drawer: {
            screen: DrawerNavigator,
            navigationOptions: ({ navigation }) => ({
                headerLeft:
                    <View style={{ marginLeft: 15 }} >
                        <TouchableOpacity
                            onPress={ () => navigation.toggleDrawer() } >
                            <Image
                                source={require('./../../resources/iconfinder_menu.png')}
                            />
                        </TouchableOpacity>
                    </View>
            })
        }
    }
);

export default RootStack;
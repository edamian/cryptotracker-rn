import React from 'react';

import { HomeScreen, AuthorScreen } from './../screens';

import { View, Text } from 'react-native';

import { createDrawerNavigator, createAppContainer, DrawerItems } from 'react-navigation';

const drawerRoot = createDrawerNavigator(
    {
        Home: { screen: HomeScreen },
        Info: { screen: AuthorScreen }
    },
    {
        contentComponent: (props) => (
            <View>
                <Text>Header</Text>
                <DrawerItems {...props}/>
                <Text>Footer</Text>
            </View>
        )
    }
);

const AppContainer = createAppContainer(drawerRoot);

export default  AppContainer;
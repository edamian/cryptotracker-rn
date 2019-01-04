import React from 'react';

import { CryptoScreen, AuthorScreen } from './../screens';

import { createDrawerNavigator } from 'react-navigation';

const DrawerNavigator = createDrawerNavigator(
    {
        Home: { screen: CryptoScreen },
        Info: { screen: AuthorScreen }
    }
);

export default  DrawerNavigator;
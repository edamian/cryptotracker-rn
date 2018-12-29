import React from 'react';
import { View } from 'react-native';
import { Header, Author } from './../index';

const AuthorScreen = () => {
    return (
        <View>
            <Header customTitle="Author Info"/>
            <Author />
        </View>
    )
};

export default  AuthorScreen;
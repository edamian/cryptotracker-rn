import React , { Component } from 'react';
import { View, Text } from 'react-native';
import { Author } from './../components';

class AuthorScreen extends Component {

    static navigationOptions= {
        title: 'Author Info',
        drawerLabel: 'Author Info'
    };

    render() {
        return (
            <View>
                <Author/>
            </View>
        )
    }
}

export default AuthorScreen;
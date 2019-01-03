import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

class ToggleDrawer extends Component {
    render() {
        return (
            <TouchableOpacity
                onPress={()=>{
                    this.props.navigation.toggleDrawer();
                }}
            >
                <Image
                    source={require('./../../resources/iconfinder_menu.png')}
                />
            </TouchableOpacity>
        )
    }
}

export default  withNavigation(ToggleDrawer);
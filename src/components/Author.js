import React from 'react';
import Hyperlink from 'react-native-hyperlink';
import { View, Text, StyleSheet } from 'react-native';

const Author = () => {
    return (
        <View style={container}>
            <View>
                <View style={textContainer}>
                    <Text style={label}>Nombre </Text>
                    <Text>Erick Damian</Text>
                </View>
                <View style={textContainer}>
                    <Text style={label}>Email</Text>
                    <Text>erickdlp95@gmail.com</Text>
                </View>
                <View style={textContainer}>
                    <Text style={label}>Github</Text>
                    <Hyperlink linkStyle={ {
                        color: "#2980b9",
                    }}>
                        <Text>https://github.com/edamian</Text>
                    </Hyperlink>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        padding: 20
    },
    label: {
        fontWeight: "bold"
    },
    textContainer: {
        marginTop: 15
    }
});

const {
    container,
    label,
    textContainer
} = styles;

export default Author;
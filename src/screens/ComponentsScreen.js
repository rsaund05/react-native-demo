import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    var name = 'Rob';
    var len = name.length;
    
    return (
        <View>
            <Text style={styles.textStyle}>Slaptastic spastastic</Text>
            <Text>Hail to you, <Text style={styles.nameStyle}>{name}</Text>! Your name is <Text style={styles.numStyle}>{len}</Text> characters long.</Text>
        </View>
    );
};

//the stylesheet.create call is being passed in an object we declare
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        color: 'red'
    },
    nameStyle: {
        color: 'purple'
    },
    numStyle: {
        color: 'green'
    }
});

export default ComponentsScreen;
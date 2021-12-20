import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Test</Text>
            <Text style={styles.altTextStyle}>TESt</Text>
            <Text style={styles.altAltTextStyle}>Test</Text>
            <Text style={styles.altTextStyle}>Test</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        margin: 3,
        height: 500,
        borderColor: 'black'
    },
    textStyle: {
        borderWidth: 1,
        margin: 3,
        padding: 5,
        borderColor: 'red'
    },
    altTextStyle: {
        borderWidth: 1,
        margin: 3,
        flex: 1,
        padding: 5,
        borderColor: 'red'
    },
    altAltTextStyle: {
        borderWidth: 1,
        margin: 3,
        flex: 3,
        padding: 5,
        borderColor: 'red'
    }
});

export default BoxScreen;
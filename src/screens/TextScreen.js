import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    
    return (
        <View>
            <Text style={styles.Title}>Enter your name!</Text>
            <TextInput
                value={name}
                onChangeText={newValue => setName(newValue)} 
                style={styles.Input}
            />
            {name === '' ? null : <Text style={styles.Title}> Your name is {name}</Text>}   
        </View>
    );

};

const styles = StyleSheet.create({
    Title: {
        fontSize: 30,
        textAlign: 'center'
    },
    Input: {
        fontSize: 20,
        margin: 15, 
        borderColor: 'black',
        borderWidth: 0.5
    }
});

export default TextScreen;
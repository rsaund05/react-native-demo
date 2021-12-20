import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0); //zero is the initial value

    return (
        <View>
            <Text style={styles.titleStyle}>Counter value: {counter}</Text>
            <Button 
                title='Increase'
                onPress={() => {
                    setCounter(counter + 1);
                }}
            />
            <Button 
                title='Decrease'
                onPress={() => {
                    setCounter(counter - 1);
                }}
            /> 
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        color: 'red',
        fontSize: 30,
        textAlign: 'center'
    },
    nameStyle: {
        color: 'purple'
    },
    numStyle: {
        color: 'green'
    }
});

export default CounterScreen;
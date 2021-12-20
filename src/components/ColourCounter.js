import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const ColourCounter = (props) => {
    return (
        <View style={{marginVertical: 20}}>
            <Text style={styles.titleStyle}>{props.colour}</Text>
            <Button onPress={() => props.onIncrease()} title={`Increase ${props.colour}`}/>
            <Button onPress={() => props.onDecrease()} title={`Decrease ${props.colour}`}/>
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        textAlign: 'center',
        fontSize: 20
    }
});

export default ColourCounter;
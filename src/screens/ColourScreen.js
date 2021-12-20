import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';

const ColourScreen = () => {
    const [colours, setColours] = useState([]);

    return(
        <View>
            <Button 
                title='Show a new colour'
                onPress={()=> {
                    setColours([...colours, randomRgb()])
                }}
            />
            <FlatList 
                data={colours}
                keyExtractor={(item)=> item}
                renderItem={({item}) => {
                    return <View style={{ marginHorizontal: 5, marginVertical:10, height: 100, width: 100, backgroundColor: item }}/>;
                }}
            />
        </View>
    );
};

const randomRgb = () => {
    var redVal = Math.floor(Math.random() * 256);
    var blueVal = Math.floor(Math.random() * 256);
    var greenVal = Math.floor(Math.random() * 256);

    return `rgb(${redVal}, ${greenVal}, ${blueVal})`;
};

const styles = StyleSheet.create({});

export default ColourScreen;
import React from 'react';
import { Text, StyleSheet, View, } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title='Forest' image={require('../../assets/forest.jpg')} score={2}/>
            <ImageDetail title='Garbage' image={require('../../assets/beach.jpg')} score={5}/>
            <ImageDetail title='Moutain' image={require('../../assets/mountain.jpg')} score={10}/>
            <ImageDetail title='NotMountain' image={require('../../assets/mountain.jpg')} score={10}/>
        </View>
    );
};

const styles = StyleSheet.create({
    nameStyle: {
        color: 'purple'
    },
    numStyle: {
        color: 'green'
    }
});

export default ImageScreen;
import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ImageDetail = (props) => {
    return (
        <View>
            <Image source={props.image} />
            <Text>Image: <Text style={styles.nameStyle}>{props.title}</Text></Text>
            <Text>Score: <Text style={styles.numStyle}>{props.score}</Text></Text>
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

export default ImageDetail;
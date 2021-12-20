import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {
    const friendList = [
        // {key: 'a', name: 'Rob', money: 20},
        // {key: 'b', name: 'Dooey', money: 400},
        // {key: 'c', name: 'Malcom', money: 12},
        // {key: 'd', name: 'Reece', money: 1},
        // {key: 'e', name: 'Hal', money: 30},
        {name: 'Rob', money: 20, broke: true},
        {name: 'Dooey', money: 400, broke: false},
        {name: 'Malcom', money: 12, broke: true},
        {name: 'Reece', money: 1, broke: true},
        {name: 'Hal', money: 30, broke: false},
        {name: 'MR Big', money: 3990, broke: false},
        {name: 'Mr smol', money: 2, broke: true},
        {name: 'UrMom', money: 33330, broke: false},
    ];
    return (<FlatList 
        data={friendList} 
        keyExtractor={(friend) => friend.name} //Friend is the array iterator, needs to be unique string tho
        renderItem={({ item }) => {
            var brokeIndicator = '';
            if(item.broke == true) {
                brokeIndicator = ':-(';
            } else {
                brokeIndicator = ':-)';
                if(item.money >= 1000) {
                    brokeIndicator = ':-O';
                }
            }
            return (<View style={{marginVertical: 20, marginHorizontal: 5}}><Text style={{fontSize: 30}}>Name: <Text style={styles.nameStyle}>{item.name}</Text> </Text>
                    <Text>Money: <Text style={styles.numStyle}>{item.money}</Text></Text>
                    <Text>Broke: <Text style={styles.nameStyle}>{brokeIndicator}</Text></Text>
                </View>    
            );
        }}></FlatList>);
};

const styles = StyleSheet.create({
    nameStyle: {
        color: 'purple'
    },
    numStyle: {
        color: 'green'
    }
});

export default ListScreen;
import React, { useReducer } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import ColourCounter from '../components/ColourCounter';

const COLOUR_CHANGEVAL = 15;

const reducerFunc = (state, action) => {
    //state is object{red, green, blue}, action is object{colour, payload} cotaining how youre modifying the state object
    switch(action.type) {
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0 ? state : {...state, red: state.red + action.payload};
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0 ? state : {...state, green: state.green + action.payload};
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state : {...state, blue: state.blue + action.payload};
        default:
            return state;
    }
};

const ColourBoxScreen = () => {
    // const [red, setRed] = useState(0);
    // const [green, setGreen] = useState(0);
    // const [blue, setBlue] = useState(0);
    
    // const setColour = (colour, change) => {
    //     //Colour = 'red', 'green', or 'blue'
    //     switch(colour) {
    //         case 'red':
    //             red + change > 255 || red + change < 0 ? Alert.alert('Warning: Colour value cannot go above 255 or below 0') : setRed(red + change);
    //             return;
    //         case 'green':
    //             green + change > 255 || green + change < 0 ? Alert.alert('Warning: Colour value cannot go above 255 or below 0') : setGreen(green + change);
    //             return;
    //         case 'blue':
    //             blue + change > 255 || blue + change < 0 ? Alert.alert('Warning: Colour value cannot go above 255 or below 0') : setBlue(blue + change);
    //             return;
    //         default: 
    //             return;
    //     }
    // };

    const [state, dispatch] = useReducer(reducerFunc, {red: 0, green:0, blue:0});

    var {red, green, blue} = state;

    return (
        <View>
            <Text style={styles.titleStyle}>Mod the Box!</Text>
            <ColourCounter 
                onIncrease = {() => dispatch({ type: 'change_red', payload: 15 })} 
                onDecrease = {() => dispatch({ type: 'change_red', payload: -15 })} 
                colour='Red'
            />
            <ColourCounter
                onIncrease = {() => dispatch({ type: 'change_green', payload: 15 })} 
                onDecrease = {() => dispatch({ type: 'change_green', payload: -15 })}
                colour='Green'
            />
            <ColourCounter 
                onIncrease = {() => dispatch({ type: 'change_blue', payload: 15 })} 
                onDecrease = {() => dispatch({ type: 'change_blue', payload: -15 })}
                colour='Blue'
            />
            <View style={{alignSelf: 'center', height: 150, width:150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/> 
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        textAlign: 'center',
        fontSize: 30,
        marginVertical: 20
    }
});

export default ColourBoxScreen;
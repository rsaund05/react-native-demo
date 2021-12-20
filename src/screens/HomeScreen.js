import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements"

const randomRgb = () => {
    var redVal = Math.floor(Math.random() * 256);
    var blueVal = Math.floor(Math.random() * 256);
    var greenVal = Math.floor(Math.random() * 256);

    return `rgb(${redVal}, ${greenVal}, ${blueVal})`;
};

const HomeScreen = ({navigation}) => {
	return (
		<View style={{
			marginHorizontal: 10
		}}>
			<Text style={styles.titleText}>Touch a button to begin.</Text>
			<View style={styles.buttonStyle}>
			<Button 
				title='GoTo Components Demo'
				type='solid'
				buttonStyle={
					{
						backgroundColor: randomRgb(),
					}
				}
				onPress={ () => {
					navigation.navigate('Components');
				}}
			/>
			</View>
			<View style={styles.buttonStyle}>
			<Button 
				title='GoTo List Demo'
				type='solid'
				buttonStyle={
					{
						backgroundColor: randomRgb(),
					}
				}
				onPress={ () => {
					navigation.navigate('List');
				}}
			/>
			</View>
			<View  style={styles.buttonStyle}>
			<Button 
				title='GoTo Image Demo'
				type='solid'
				buttonStyle={
					{
						backgroundColor: randomRgb(),
					}
				}
				onPress={ () => {
					navigation.navigate('Image');
				}}
			/>
			</View>
			<View style={styles.buttonStyle}>
			<Button 
				title='GoTo State demo'
				type='solid'
				buttonStyle={
					{
						backgroundColor: randomRgb(),
					}
				}
				onPress={() => {
					navigation.navigate('Counter');
				}}
			/>
			</View>
			<View style={styles.buttonStyle}>
			<Button 
				title='Goto colour demo'
				type='solid'
				buttonStyle={
					{
						backgroundColor: randomRgb(),
					}
				}
				onPress={()=> {
					navigation.navigate('Colour')
				}}
			/>
			</View>
			<View style={styles.buttonStyle}>
			<Button 
				title='Goto colourbox demo'
				type='solid'
				buttonStyle={
					{
						backgroundColor: randomRgb(),
					}
				}
				onPress={()=> {
					navigation.navigate('Box')
				}}
			/>
			</View>
			<View style={styles.buttonStyle}>
			<Button 
				title='Goto TextInput demo'
				type='solid'
				buttonStyle={
					{
						backgroundColor: randomRgb(),
					}
				}
				onPress={()=> {
					navigation.navigate('Text')
				}}
			/>
			</View>
			<View style={styles.buttonStyle}>
			<Button 
				title='Goto BoxObject demo'
				type='solid'
				buttonStyle={
					{
						backgroundColor: randomRgb(),
					}
				}
				onPress={()=> {
					navigation.navigate('BoxObj')
				}}
			/>
			</View>
			{/* <TouchableOpacity 
				onPress={ () => {
					props.navigation.navigate('Components');
				}}
			>
				<Text>Touch me bitch</Text>
			</TouchableOpacity> */}
		</View>	
	);
};

const styles = StyleSheet.create({
	titleText: {
		textAlign: 'center',
		fontSize: 20,
		marginVertical: 5,
	},
	touchOpStyle: {
		
	},
	buttonStyle: {
		marginVertical: 5,
	}
});

export default HomeScreen;

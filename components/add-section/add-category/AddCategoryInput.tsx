import React from 'react'
import { Pressable, StyleSheet, TextInput, View, Text, Image } from 'react-native'

export const AddCategoryInput = () => {
	const add = () =>{
		return "";
	}
	return (
		<View style={styles.container}>
			<TextInput style={styles.input} placeholder="Add category"></TextInput>
			<Pressable style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgba(83, 218, 218, 0.5)'
              : '#e2e2e2'
          }, styles.buttonPressedShadow
        ]}><View style={styles.addButton}><Image source={require("../../../assets/icons/plus-regular-240.png")}style={styles.addButtonIcon} /></View></Pressable>
		</View>
	)
}
const styles = StyleSheet.create({

	container: {
		width: "90%",
		paddingTop: "5%",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		flexDirection: "row",
	},
	input: {
		flex: 1,
		backgroundColor: "#F5F5F5",
		borderRadius: 15,
		height: 55,
		paddingLeft: "5%",
		marginRight: 20,
		shadowColor: "#BABABA",
		shadowOffset: { width: 0, height: 3 },
    	shadowOpacity: 0.2,
    	shadowRadius: 2,
		elevation: 6,
	},
	addButton: {
		backgroundColor: "#19B9B9",
		width: 55,
		height: 55,
		borderRadius: 30,
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	buttonPressedShadow: {
		width: 65,
		height: 65,
		borderRadius: 40,
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	addButtonIcon: {
		height: "80%",
		width: "80%",
		tintColor: "white"
	}
});

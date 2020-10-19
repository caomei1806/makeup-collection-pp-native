import React from 'react'
import { StyleSheet,View,Text } from 'react-native'

export const Whishlist = () => {
	return (
		<View style={styles.app}>
			<View style={styles.heading}>
				<Text>WHISHLIST</Text>	
			</View>
			<View style={styles.container}>
				
			</View>
		</View>
	)
}
const styles = StyleSheet.create({

	app: {
		width: "100%",
		display: "flex",
		alignItems: "center"
	},
	container: {
		width: "90%",
		paddingTop: "5%",
		paddingBottom: "5%",
	},
	heading: {
		width: "100%",
		backgroundColor: "#F5F5F5",
		paddingTop: "4%",
		paddingBottom: "4%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	}
});
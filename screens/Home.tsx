import React from 'react'
import { StyleSheet,View,Text } from 'react-native'

export const Home = () => {
	return (
		<View style={styles.app}>
			<View style={styles.container}>
				<Text>Home</Text>
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
	}
});
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AddCategoryInput } from '../components/add-section/add-category/AddCategoryInput'

export const Add = () => {
	return (
		<View style={styles.app}>
			<View style={styles.heading}>
					<Text>ADD CATEGORY</Text>
			</View>
			<View style={styles.container}>
				<AddCategoryInput />	
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
		paddingBottom: "5%",
		display: "flex",
		alignItems: "center"
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

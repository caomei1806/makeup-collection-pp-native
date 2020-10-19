import { loadPartialConfig } from '@babel/core'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export const TopNav = () => {
	return (
		<View style={styles.navbar}>
			<View style={styles.container}>
				<View style={styles.dFlexRow}>
				<View style={[styles.lvl, styles.marginRight10]}><Text>32</Text></View>
				<Text>Karolina Grochal</Text>
				</View>
				<Image source={require('../../assets/icons/paper-plane-solid-240.png')} style={styles.paperPlane}></Image>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({

	container: {
		width: "90%",
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	dFlexRow: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center"
	},
	marginRight10: {
		marginRight: 10
	},


	navbar: {
		width: '100%',
		height: 70,
		backgroundColor: "#80AFDD",
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	lvl: {
		height: 30,
		width: 30,
		borderRadius: 15,
		backgroundColor: "white",
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	paperPlane: {
		width: 25,
		height: 25,
		tintColor: "#476DD6",
	}
});

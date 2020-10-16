import { loadPartialConfig } from '@babel/core'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export const TopNav = () => {
	return (
		<View style={styles.navbar}>
			<Text>Karolina Grochal</Text>
			<Image source={require('../../assets/icons/paper-plane-solid-240.png')} style={styles.paperPlane}></Image>
		</View>
	)
}

const styles = StyleSheet.create({
	navbar: {
		width: '100%',
		height: 70,
		backgroundColor: "#80AFDD",
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingLeft: 40,
		paddingRight: 40,
	},
	paperPlane: {
		width: 25,
		height: 25,
		tintColor: "#476DD6"
	}
});

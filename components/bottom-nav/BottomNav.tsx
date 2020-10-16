import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BottomNavBtn } from './BottomNavBtn'

export const BottomNav: React.FC = () => {
	return (
		<View style={styles.bottomNav}>
			<BottomNavBtn iconName="add" title="Add" linkTo="/add" />
			<BottomNavBtn iconName="wishlist" title="Wishlist" linkTo="/whishlist" />
			<BottomNavBtn iconName="collection" title="Collection" linkTo="/collection" />
			<BottomNavBtn iconName="menu" title="Menu" linkTo="menu" />
		</View>
	)
}

const styles = StyleSheet.create({

	bottomNav: {

		width: '100%',
		height: 70 ,
		backgroundColor: '#ddd',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center'

	}

});

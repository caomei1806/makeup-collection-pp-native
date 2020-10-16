import { loadPartialConfig } from '@babel/core'
import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import {Link, useLocation} from 'react-router-native'

interface Props{
	iconName: 'add' | 'wishlist' | 'collection' | 'menu',
	title: string,
	linkTo: string
}

export const BottomNavBtn: React.FC<Props> = ({iconName, title, linkTo}) => {

	const getIconSource = () => {
		switch(iconName){
			case 'add':
				return require('../../assets/icons/plus-regular-240.png')
			case 'wishlist':
				return require('../../assets/icons/heart-regular-240.png')
			case 'collection':
				return require('../../assets/icons/book-alt-regular-240.png')
			case 'menu':
				return require('../../assets/icons/menu-regular-240.png')
			default:
				return
		}
	} 
	const location = useLocation();

	const handleElementNavStyle = (key: 'button' | 'buttonIcon' | 'buttonTitle', keyActive: 'buttonActive' | 'buttonTitleActive') => {
		let elementStyle = {...styles[key]}
		if(location.pathname == linkTo){
			elementStyle = {...styles[key], ...styles[keyActive]}
		}
		return elementStyle
	}

	const handleIconNavStyle = (locationPath: string) => {
		if (locationPath === linkTo)
			switch(locationPath){
				case '/':
					return {...styles.buttonIcon}
				case '/home':
					return {...styles.buttonIcon}	
				case '/add':
					return {...styles.buttonIcon, ...styles.buttonIconAdd}
				case '/whishlist':
					return {...styles.buttonIcon, ...styles.buttonIconWishlist}
				case '/collection':
					return {...styles.buttonIcon, ...styles.buttonIconCollection}
				default:
					return
			}
			else return {...styles.buttonIcon}

	}

	return (
		<Link to={linkTo} underlayColor="#CCCCCC" style={styles.link}>
			<View style={handleElementNavStyle('button', 'buttonActive')}>
				<Image source={getIconSource()} style={handleIconNavStyle(location.pathname)}></Image>
				<Text style={handleElementNavStyle('buttonTitle','buttonTitleActive')}>{title}</Text>
			</View>
		</Link>
	)
}
const styles = StyleSheet.create({
	link: {
		borderRadius: 15
	},
	button:{
		height: 60,
		width: 60,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonActive: {
		backgroundColor: "#D5D5D5",
		borderRadius: 15,
	},
	
	buttonTitle: {
		fontSize: 10,
		marginTop: 0,
		color: "#8B8B8B"
	},
	
	buttonTitleActive: {
		color: '#0C0C0C'
	},
	buttonIcon: {
		width: 25,
		height: 25,
		tintColor: "#8B8B8B"
	},
	buttonIconAdd: {
		tintColor: "#19B9B9"
	},
	buttonIconWishlist: {
		tintColor: "#5151C3"
	},
	buttonIconCollection: {
		tintColor: "#476DD6"
	}

});
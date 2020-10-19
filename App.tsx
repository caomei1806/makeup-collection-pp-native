/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NativeRouter, Route, Link } from "react-router-native";
import { BottomNav } from './components/bottom-nav/BottomNav';
import {TopNav} from "./components/top-nav/TopNav";
import { Add } from './screens/Add';
import { Collection } from './screens/Collection';
import { Home } from './screens/Home';
import { Whishlist } from './screens/Whishlist';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
	<>
    	<NativeRouter>
      		<StatusBar barStyle="dark-content" backgroundColor="#80AFDD" />
     		 	<SafeAreaView>
		  			<View style={styles.app}>
						<TopNav />
						<View style={styles.main}>
							<Route path='/' component={Home} exact />
							<Route path='/add' component={Add} />
							<Route path='/whishlist' component={Whishlist} />
							<Route path='/collection' component={Collection} />
							<Route path='/menu' component={Home} />
						</View>
						<BottomNav />
					</View>
				</SafeAreaView>
		</NativeRouter>
	</>
  );
};

const styles = StyleSheet.create({
	app:{
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#e2e2e2'
	},
	main: {
		flex: 1
		
	}


});

export default App;

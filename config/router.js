import React from 'react';
import { StackNavigator } from 'react-navigation';
import Intro from '../components/intro';
import Logging from '../components/logging';
import App_container from '../containers/app_container';
import Home_container from '../containers/home_container';

export const Navigator = new StackNavigator(
	{
		App_container:{
			screen: App_container,
			navigationOptions:{
				header: null
			}
		},
		Intro:{
			screen: Intro,
			navigationOptions:{
				header: null
			}
		},
		Logging:{
			screen: Logging,
			navigationOptions:{
				header: null
			}
		}
		,
		Home_container:{
			screen: Home_container,
			navigationOptions:{
				header: null
			}
		}
	},
	{
		initialRouteName: 'App_container',
	}
);

class Nav extends React.Component {

	render(){
		return(
			<Navigator />
		);
		
	}
}

export const AppNav = Nav;
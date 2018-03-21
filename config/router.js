import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Intro from '../components/intro';
import Logging from '../components/logging';

const get_route = ()=>{
  return 'Intro';
}

export const App_router = StackNavigator(
	{
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
	},
  {
    initialRouteName: get_route(),
  }
);

export default App_router;
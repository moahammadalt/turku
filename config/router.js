import React from 'react';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import Intro from '../components/intro';
import Logging from '../components/logging';
import {
	createReduxBoundAddListener,
	createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

const get_route = ()=>{
	return 'Intro';
};

const middleware = createReactNavigationReduxMiddleware('root', state => state.navigation );
const addListener = createReduxBoundAddListener('root');

export const Navigator = new StackNavigator(
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

class Nav extends React.Component {
	render(){
		return(
			<Navigator navigation={addNavigationHelpers({
				dispatch: this.props.dispatch,
				state: this.props.navigation,
				addListener
			})} />
		);
	}
}
const mapStateToProps = state => ({
	navigation: state.navigation,
});

export const AppNav = connect(mapStateToProps)(Nav);
import React from 'react';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { Icon } from 'react-native-elements';
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

const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.navigation, // <-- make sure this is where your nav state lives (i.e. if your redux state is at `state.nav` use state => state.nav instead)
  );
  const addListener = createReduxBoundAddListener("root");

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
		initialRouteName: 'Intro',
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
})

export default connect(mapStateToProps)(Nav);
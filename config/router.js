import React from 'react';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import Intro from '../components/intro';
import Logging from '../components/logging';
import { cs } from '../helpers';

const get_route = (app_lan)=>{
	let initial_route = '';
	if(app_lan == ''){
		initial_route = 'Intro';
	}
	else{
		initial_route = 'Logging';
	}
	return initial_route;
};

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
	
	componentWillReceiveProps(nextProps){
		cs('ccccc componentWillReceiveProps ccccc');
		get_route(nextProps.app_lan);
		this.props.set_labels(nextProps.app_lan);
	}

	render(){
		return(
			<Navigator />
		);
	}
}
const mapStateToProps = state => {
	return {
		app_lan: state.app_lan,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		set_labels: (name) => {
			dispatch({
				type: 'SET_APP_LABELS',
				payload: name
			});
		}
	};
};

export const AppNav = connect(mapStateToProps, mapDispatchToProps)(Nav);